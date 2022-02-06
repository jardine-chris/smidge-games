import { FloatingInput } from "../components/Form/FloatingInput";

export default function Register() {
  return (
    <div className="background">
      <div className="w-full max-w-lg py-16 mx-auto">
        <form className="px-4 pt-6 pb-8 mb-4 border rounded shadow-md bg-zinc-800 border-zinc-600/70 font-montserrat">
          <h1 className="mb-4 font-bold text-white uppercase">
            Create an Account
          </h1>
          <div className="grid grid-cols-2 gap-4">
            <FloatingInput id="first_name" type="text" label="First Name" />
            <FloatingInput id="last_name" type="text" label="Last Name" />
          </div>
          <FloatingInput id="username" type="text" label="Username" />
          <FloatingInput id="email" type="email" label="Email" />
          <FloatingInput id="password" type="password" label="Password" />
          <div className="grid grid-cols-2">
            <button className="px-8 py-2 font-bold text-white uppercase bg-black hover:bg-orange-600">
              Register
            </button>
            <h1 className="self-center font-bold text-orange-600 uppercase cursor-pointer hover:text-white justify-self-end">Forgot password?</h1>
          </div>
        </form>
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
            background: linear-gradient(
                to right,
                rgba(0, 0, 0, 0.75),
                rgba(0, 0, 0, 0.75)
              ),
              url("/images/smidge-games-logo/logo-tessellate-weave.png");
            background-repeat: repeat;
            background-size: 12rem;
            transform: scale(1.1);
            filter: blur(1px);
            z-index: -1;
            overflow: hidden;
            -webkit-animation: animate_background 10s linear 0s infinite;
            -moz-animation: animate_background 10s linear 0s infinite;
            -o-animation: animate_background 10s linear 0s infinite;
            animation: animate_background 10s linear 0s infinite;
          }

          @-webkit-keyframes animate_background { 
            from { 
                background-position: 0 0;
            } 
            to { 
                background-position: -200px 0;
            } 
        }
        @-moz-keyframes animate_background { 
            from { 
                background-position: 0 0;
            } 
            to { 
                background-position: -200px 0;
            } 
        }
        @-o-keyframes animate_background { 
            from { 
                background-position: 0 0;
            } 
            to { 
                background-position: -200px 0;
            } 
        }
        @keyframes animate_background { 
            from { 
                background-position: 0 0;
            } 
            to { 
                background-position: -200px 0;
            } 
        }
        `}
      </style>
    </div>
  );
}
