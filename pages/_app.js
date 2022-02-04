import { Navbar } from "../components/Navbar/Navbar";
import "../styles/globals.scss";
import Router from "next/router";
import NProgress from "nprogress";
import "../styles/nprogress.css";

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
