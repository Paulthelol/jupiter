import { AppProps } from "next/app";
import Navbar from "../components/navigation/Navbar";
import "../styles/globals.css";
import StartPage from "./onboarding/startpage"
import OBPersonalInfo from "./onboarding/perinfo"
import OBInterests from "./onboarding/onbinterests"
import OBReccomendations from "./onboarding/onbrecom"
import OBAccountConf from "./onboarding/accountconf"



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
