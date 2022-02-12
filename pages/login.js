import { useState } from "react";
import { FloatingInput } from "../components/Form/FloatingInput";
import { LoginForm } from "../components/Form/LoginForm";

export default function Login() {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`"Name: ${user.username}\nPassword: ${user.password}`);
  };
  return (
    <div className="background">
      <div className="w-full max-w-lg py-16 mx-auto">
        <LoginForm />
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
            background-size: 20rem;
            transform: scale(1.1);
            filter: blur(1px);
            z-index: -1;
            overflow: hidden;
            // -webkit-animation: animate_background 15s linear 0s infinite;
            // -moz-animation: animate_background 15s linear 0s infinite;
            // -o-animation: animate_background 15s linear 0s infinite;
            // animation: animate_background 15s linear 0s infinite;
          }

          @-webkit-keyframes animate_background {
            from {
              background-position: 0 0;
            }
            to {
              background-position: -20rem 0;
            }
          }
          @-moz-keyframes animate_background {
            from {
              background-position: 0 0;
            }
            to {
              background-position: -20rem 0;
            }
          }
          @-o-keyframes animate_background {
            from {
              background-position: 0 0;
            }
            to {
              background-position: -20rem 0;
            }
          }
          @keyframes animate_background {
            from {
              background-position: 0 0;
            }
            to {
              background-position: -20rem 0;
            }
          }
        `}
      </style>
    </div>
  );
}
