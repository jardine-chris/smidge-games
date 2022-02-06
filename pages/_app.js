import { Navbar } from "../components/Navbar/Navbar";
import "../styles/globals.scss";
import Router from "next/router";
import NProgress from "nprogress";
import "../styles/nprogress.css";
import { Footer } from "../components/Footer/Footer";
import { UserProvider } from '@auth0/nextjs-auth0';

Router.events.on("routeChangeStart", () => NProgress.start());
Router.events.on("routeChangeComplete", () => NProgress.done());
Router.events.on("routeChangeError", () => NProgress.done());

export default function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </UserProvider>
  );
}
