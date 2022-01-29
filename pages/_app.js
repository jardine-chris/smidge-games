import { Navbar } from "../components/Navbar/Navbar";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <div className="bg-black">
      <Navbar />
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
