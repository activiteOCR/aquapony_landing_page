import {
  Box,
  Flex,
  Text,
  useColorModeValue,
  Link,
  IconButton,
  Stack,
} from "@chakra-ui/react";
import { FaTelegramPlane } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6"; // Replace with the correct import if needed
import { ReactNode } from "react";

const Logo = (props: any) => {
  return (
    <img
      src="https://raw.githubusercontent.com/activiteOCR/aquapony_landing_page/4d329f27f825e7d47d618fb0924dd3f210bf7c45/src/images/logo_aquapony.svg"
      alt="Logo"
      // height={32}
      style={{ maxHeight: "80px" }}
      {...props}
    />
  );
};

const ListHeader = ({ children }: { children: ReactNode }) => {
  return (
    <Text fontWeight={"500"} fontSize={"lg"} mb={2}>
      {children}
    </Text>
  );
};

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue("blackAlpha.100", "blackAlpha.100")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Box py={10}>
        <Flex
          align={"center"}
          _before={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            mr: 8,
          }}
          _after={{
            content: '""',
            borderBottom: "1px solid",
            borderColor: useColorModeValue("gray.200", "gray.700"),
            flexGrow: 1,
            ml: 8,
          }}
        >
          <Logo />
        </Flex>
        <Stack direction={"row"} spacing={6} justify={"center"} mt={4}>
          <IconButton
            as={Link}
            href="https://t.me/aquapony_chat"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            icon={<FaTelegramPlane />}
            colorScheme="telegram"
          />
          <IconButton
            as={Link}
            href="https://twitter.com/tonaquapony"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="X"
            icon={<FaXTwitter />}
            colorScheme="twitter"
          />
        </Stack>
        <Text pt={6} fontSize={"sm"} textAlign={"center"} textColor={"white"}>
          © 2024 Aquapony. All rights reserved
        </Text>
      </Box>
    </Box>
  );
}
