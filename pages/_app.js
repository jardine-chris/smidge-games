import { Navbar } from "../components/Navbar/Navbar";
import "../styles/globals.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
