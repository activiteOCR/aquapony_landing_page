import {
  Box,
  Heading,
  Text,
  Container,
  Stack,
  useColorModeValue,
} from "@chakra-ui/react";

const Mission = () => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.800")}
      color={useColorModeValue("black", "white")}
      py={{ base: 20, md: 24 }}
    >
      <Container maxW={"5xl"}>
        <Stack spacing={4} textAlign={"center"}>
          <Heading
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl" }}
            fontWeight={"bold"}
          >
            Our Mission
          </Heading>
          <Text fontSize={{ base: "md", sm: "lg", md: "xl" }} py={5}>
            Aquapony is more than just a memecoin. It's a vibrant community
            riding the waves of the TON blockchain. Our mission is to bring
            together enthusiasts, investors, and crypto fans to create a fun and
            engaging ecosystem.
          </Text>
          <Text fontSize={{ base: "md", sm: "lg", md: "xl" }} py={5}>
            We believe in the power of memes to connect people and make complex
            technologies accessible. Aquapony aims to leverage the playful
            nature of memes to promote understanding and adoption of blockchain
            technology.
          </Text>
          <Text fontSize={{ base: "md", sm: "lg", md: "xl" }} py={5}>
            Join us on our journey as we explore the depths of the crypto ocean,
            where every wave brings new opportunities and adventures. Together,
            we can make a splash in the world of digital currencies.
          </Text>
        </Stack>
      </Container>
    </Box>
  );
};

export default Mission;
