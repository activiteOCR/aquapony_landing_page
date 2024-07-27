import { ChakraProvider, Grid, GridItem } from "@chakra-ui/react";
import type { AppProps } from "next/app";
import theme from "../lib/theme";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // Ensure the path is correct

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Grid
        templateAreas={`"header header"
                        "nav main"
                        "footer footer"`}
        gridTemplateRows={"50px 1fr 30px"}
        gridTemplateColumns={"60px 1fr"}
        h="100vh"
        gap="1"
        color="blackAlpha.700"
        fontWeight="bold"
      >
        <GridItem area={"header"} bg="black" color="white">
          <Navbar />
        </GridItem>
        <GridItem area={"nav"} bg="brand.400" p="2">
          Hodl
        </GridItem>
        <GridItem area={"main"} bg="white" p="2">
          <Component {...pageProps} />
        </GridItem>
        <GridItem area={"footer"} bg="black" p="1">
          <Footer />
        </GridItem>
      </Grid>
    </ChakraProvider>
  );
}

export default MyApp;
