import { Navbar } from "../components/Navbar/Navbar";
import "../styles/globals.scss";

export default function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-black">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}
