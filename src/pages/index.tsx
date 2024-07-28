import {
  Box,
  Heading,
  Text,
  List,
  ListItem,
  VStack,
  AspectRatio,
  Image,
} from "@chakra-ui/react";
import React from "react";
import Features from "../components/Features";
import HeroSection from "../components/HeroSection";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const Home: React.FC = () => {
  return (
    <Box>
      <HeroSection />
      {/* <Box textAlign="center" p={5}>
        <Box as="section" p="section">
          <Heading as="h2" size="lg" mb="4">
            Welcome to Aquapony
          </Heading>
          <Text fontSize="md">
            Dive into the world of Aquapony, the meme coin making waves in the
            crypto ocean!
          </Text>
        </Box>

        <AspectRatio maxW="400px" ratio={4 / 3} mx="auto">
          <Image
            src="https://raw.githubusercontent.com/activiteOCR/aquapony_landing_page/main/src/images/Aquapony_chapter1.webp"
            alt="Aquapony chapter 1"
            objectFit="cover"
          />
        </AspectRatio>
      </Box> */}
      {/* <Features /> */}
    </Box>
  );
};

export default Home;
