import axios from "axios";
import { useState } from "react";
import { FloatingInput } from "./FloatingInput";

export const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    setIsLoading(true);

    const res = await axios
      .post(
        "https://api.smidgegames.com/wp-json/wp/v2/users",
        {
          first_name: firstName,
          last_name: lastName,
          username: username,
          email: email,
          password: password,
        },
        {
          headers: {
            Authorization: `Basic ${process.env.AUTH_BASIC_TOKEN}`,
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        setIsLoading(false);
      })
      .catch(err => console.log(err));
  };

  const inputBoxStyle =
    "shadow appearance-none h-12 border border-zinc-700/70 placeholder:text-gray-500 focus:placeholder:text-gray-400 bg-zinc-900 focus:border-orange-600 w-full pt-2 pb-3 px-3 text-white leading-tight caret-orange-600 focus:outline-none focus:shadow-outline";
  return (
    <div className="w-full max-w-lg py-16 mx-auto">
      <form
        className="px-4 pt-6 pb-8 mb-4 border rounded shadow-md bg-zinc-800 border-zinc-600/70 font-montserrat"
        onSubmit={handleSubmit}
      >
        <h1 className="mb-4 font-bold text-white uppercase">
          Create an Account
        </h1>
        <div className="grid grid-cols-2 gap-4">
          <FloatingInput label="First Name">
            <input
              id="first_name"
              className={inputBoxStyle}
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FloatingInput>
          <FloatingInput label="Last Name">
            <input
              id="last_name"
              className={inputBoxStyle}
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </FloatingInput>
        </div>
        <FloatingInput label="Username">
          <input
            id="username"
            className={inputBoxStyle}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </FloatingInput>
        <FloatingInput label="Email">
          <input
            id="email"
            className={inputBoxStyle}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FloatingInput>
        <FloatingInput label="Password">
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
            Register
          </button>
          <h1 className="self-center font-bold text-orange-600 uppercase cursor-pointer hover:text-white justify-self-end">
            Forgot password?
          </h1>
        </div>
      </form>
    </div>
  );
};
