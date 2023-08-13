import type { AppProps } from "next/app";
import GlobalStyle from "../styles/global-styles";
import Header from "@/components/organisms/Layout/Header/Header";
import Navigation from "@/components/organisms/Layout/Header/Navigation";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Navigation />
      <Component {...pageProps} />
    </>
  );
}
