import { useState } from "react";
import { FloatingInput } from "./FloatingInput";
import Link from "next/link";
import router from "next/router";

export const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await fetch(
      `https://api.smidgegames.com/?rest_route=/simple-jwt-login/v1/auth&email=${username}&password=${password}`,
      {
        method: "POST",
      }
    )
      .then((res) => res.json())
      .then((res) => {
        const jwt = res.data.jwt;
        if (jwt) {
          fetch(
            `https://api.smidgegames.com/?rest_route=/simple-jwt-login/v1/autologin&JWT=${jwt}`
          ).then((res) => {
            console.log(res);
            console.log(jwt);
            router.push("/");
          });
        }
      });
  };

  const inputBoxStyle =
    "shadow appearance-none pt-6 h-12 border border-zinc-700/70 placeholder:text-gray-500 focus:placeholder:text-gray-400 bg-zinc-900 focus:border-orange-600 w-full pb-3 px-3 text-white text-sm leading-tight caret-orange-600 focus:outline-none focus:shadow-outline";
  return (
    <div className="w-full max-w-lg py-16 mx-auto">
      <form
        className="px-4 pt-6 pb-8 mb-4 border rounded shadow-md bg-zinc-800 border-zinc-600/70 font-montserrat"
        onSubmit={handleSubmit}
      >
        <h1 className="mb-4 font-bold text-white uppercase">Login</h1>
        <FloatingInput label="Username" inputText={username}>
          <input
            id="username"
            className={inputBoxStyle}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FloatingInput>
        <FloatingInput label="Password" inputText={password}>
          <input
            id="password"
            className={inputBoxStyle}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FloatingInput>
        <div className="grid grid-cols-2">
          <button
            className="px-8 py-2 font-bold text-white uppercase bg-black hover:bg-orange-600"
            type="submit"
          >
            Login
          </button>
          <h1 className="self-center font-bold text-orange-600 uppercase cursor-pointer hover:text-white justify-self-end">
            Forgot password?
          </h1>
        </div>
      </form>
      <div className="px-4 py-6 text-center text-white border rounded shadow-md bg-zinc-800 border-zinc-600/70 font-montserrat">
        <h1 className="mb-4">Don&apos;t have an account?</h1>
        <Link href="/register" passHref>
          <button className="w-full py-2 font-bold text-white uppercase bg-black hover:bg-orange-600">
            Register Now
          </button>
        </Link>
      </div>
    </div>
  );
};
