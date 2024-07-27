// components/Footer.tsx
import { Box, Text } from "@chakra-ui/react";
import React from "react";

const Footer: React.FC = () => {
  return (
    <Box bg="black" color="white" py={0} textAlign="center">
      <Text>&copy; 2024 Aquapony ton. All rights reserved.</Text>
    </Box>
  );
};

export default Footer;
