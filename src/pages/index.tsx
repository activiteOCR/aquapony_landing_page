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

const Home: React.FC = () => {
  return (
    <Box textAlign="center" p={5}>
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
          src="https://bit.ly/naruto-sage"
          alt="naruto"
          objectFit="cover"
        />
      </AspectRatio>

      {/* <Box as="section" id="features" py={10}>
        <Heading>Features</Heading>
        <List spacing={3} my={4}>
          <ListItem>Feature 1</ListItem>
          <ListItem>Feature 2</ListItem>
          <ListItem>Feature 3</ListItem>
        </List>
      </Box> */}
    </Box>
  );
};

export default Home;
