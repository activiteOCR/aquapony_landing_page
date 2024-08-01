import { ChakraProvider } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import { Analytics } from "@vercel/analytics/react";
import theme from "../lib/theme";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Component {...pageProps} />
      <Analytics />
      <Footer />
    </ChakraProvider>
  );
}

export default MyApp;
