import "./globals.scss";
//import Layout from "../components/layout";
import Header from "../components/header";

function MyApp({ Component, pageProps }) {
  //const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
