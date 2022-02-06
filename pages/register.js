import { FloatingInput } from "../components/Form/FloatingInput";

export default function Register() {

  return (
    <div className="background">
      <div class="py-16 w-full mx-auto max-w-lg">
      <form class="bg-zinc-800 border border-zinc-600/70 shadow-md font-montserrat rounded px-4 pt-6 pb-8 mb-4">
        <FloatingInput id="email" type="email" label="Email" />
        </form>
        {/* <form class="bg-black border border-zinc-600/70 shadow-md font-montserrat rounded px-4 pt-6 pb-8 mb-4">
          <div class="mb-4">
            <label
              class="block text-white uppercase text-sm font-bold mb-2"
              for="username"
            >
              Username
            </label>
            <input class={inputBoxStyle} id="username" type="text" />
          </div>
          <div class="mb-4">
            <label
              class="block text-white uppercase text-sm font-bold mb-2"
              for="email"
            >
              Email
            </label>
            <input class={inputBoxStyle} id="email" type="email" />
          </div>
          <div class="mb-6">
            <label
              class="block text-white uppercase text-sm font-bold mb-2"
              for="password"
            >
              Password
            </label>
            <input
              class={inputBoxStyle}
              id="password"
              type="password"
              placeholder="******************"
            />
          </div>
          <div class="flex items-center justify-between">
            <button
              class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
            >
              Sign In
            </button>
            <a
              class="inline-block align-baseline font-bold text-sm text-orange-600 hover:text-white"
              href="#"
            >
              Forgot Password?
            </a>
          </div>
        </form> */}
      </div>
      <style jsx>
          {`
          .background {
              position: relative;              
          }

          .background::before {
              content: "";
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background: linear-gradient(to right, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("/images/smidge-games-logo/logo-tessellate-weave.png");
              background-repeat: repeat;
              background-size: 12rem;
              transform: scale(1.1);
              filter: blur(1px);
              z-index: -1;
              overflow: hidden;

          }
          `}
      </style>
    </div>
  );
}
