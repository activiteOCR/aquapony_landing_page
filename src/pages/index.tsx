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
//import Features from "../components/Features";
import HeroSection from "../components/HeroSection";
import Mission from "../components/Mission";
import WaveDivider from "../components/WaveDivider";

const Home: React.FC = () => {
  return (
    <Box>
      <HeroSection />
      <WaveDivider />
      <Mission />
      {/* <Features /> */}
    </Box>
  );
};

export default Home;
