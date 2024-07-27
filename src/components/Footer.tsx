// components/Footer.tsx
import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <Box bg="black" color="white" py={4} textAlign="center">
      <Text>&copy; 2024 My Landing Page. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
