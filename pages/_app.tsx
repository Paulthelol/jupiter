import { AppProps } from "next/app";
import Navbar from "../components/navigation/Navbar";
import "../styles/globals.css";
import StartPage from "../pages/startpage"
import OBPersonalInfo from "../pages/perinfo"
import OBInterests from "../pages/onbinterests"
import OBReccomendations from "../pages/onbrecom"
import OBAccountConf from "../pages/accountconf"



function MyApp({ Component, pageProps }: AppProps) {
  if (Component == StartPage || Component == OBPersonalInfo || Component == OBInterests || Component == OBReccomendations || Component == OBAccountConf) {
    return(
      <Component {...pageProps} />
    );
  } else {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
  }
}

export default MyApp;
