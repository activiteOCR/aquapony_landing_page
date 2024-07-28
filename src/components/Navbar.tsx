// import {
//   Box,
//   Flex,
//   Text as ChakraText,
//   IconButton,
//   Button,
//   Stack,
//   Collapse,
//   Icon,
//   Link,
//   Popover,
//   PopoverTrigger,
//   PopoverContent,
//   useColorModeValue,
//   useBreakpointValue,
//   useDisclosure,
// } from "@chakra-ui/react";
// import {
//   HamburgerIcon,
//   CloseIcon,
//   ChevronDownIcon,
//   ChevronRightIcon,
// } from "@chakra-ui/icons";

// export default function Navbar() {
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <Box>
//       <Flex
//         bg="black"
//         color="white"
//         minH={"60px"}
//         py={{ base: 2, md: 4 }}
//         px={{ base: 4, md: 8 }}
//         borderBottom={1}
//         borderStyle={"solid"}
//         borderColor={useColorModeValue("gray.200", "gray.900")}
//         align={"center"}
//         justify={"space-between"}
//       >
//         <Flex justify={{ base: "start", md: "start" }}>
//           <Link
//             href="https://aquapony-landing-page.vercel.app/"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             <img
//               src="https://raw.githubusercontent.com/activiteOCR/aquapony_landing_page/974ff4fe7929e3131824ca640e8df60325058af9/src/images/aquapony-sunglasses.svg" // Replace with your SVG URL
//               alt="Logo"
//               style={{ maxHeight: "40px" }}
//             />
//           </Link>
//         </Flex>

//         <Flex display={{ base: "flex", md: "none" }}>
//           <IconButton
//             onClick={onToggle}
//             icon={
//               isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
//             }
//             variant={"ghost"}
//             aria-label={"Toggle Navigation"}
//           />
//         </Flex>

//         <Stack
//           direction={"row"}
//           spacing={4}
//           align={"center"}
//           display={{ base: "none", md: "flex" }}
//         >
//           <DesktopNav />
//           <Button
//             as={"a"}
//             fontSize={"sm"}
//             fontWeight={600}
//             color={"white"}
//             bg={"pink.400"}
//             href="https://t.me/gasPump_bot/app?startapp=eyJyZWZfdXNlcl9pZCI6NTM3NTIxMzEyOSwidG9rZW5fYWRkcmVzcyI6IkVRQko4R0tJZV9wQy1wRjBpcUVhRldRQ1N4MzBFczZheXF4LXNpSmZEc3JXcjBxcyJ9" // External URL for the button
//             target="_blank"
//             rel="noopener noreferrer"
//             _hover={{
//               bg: "pink.300",
//             }}
//           >
//             Buy $GASAQA
//           </Button>
//         </Stack>
//       </Flex>

//       <Collapse in={isOpen} animateOpacity>
//         <MobileNav />
//       </Collapse>
//     </Box>
//   );
// }

// const DesktopNav = () => {
//   const linkColor = "white";
//   const linkHoverColor = useColorModeValue("gray.200", "white");
//   const popoverContentBgColor = useColorModeValue("white", "gray.800");

//   return (
//     <Stack direction={"row"} spacing={4}>
//       {NAV_ITEMS.map((navItem) => (
//         <Box key={navItem.label}>
//           <Popover trigger={"hover"} placement={"bottom-start"}>
//             <PopoverTrigger>
//               <Link
//                 p={2}
//                 href={navItem.href ?? "#"}
//                 fontSize={"lg"}
//                 fontWeight={500}
//                 color={linkColor}
//                 _hover={{
//                   textDecoration: "none",
//                   color: linkHoverColor,
//                 }}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {navItem.label}
//               </Link>
//             </PopoverTrigger>

//             {navItem.children && (
//               <PopoverContent
//                 border={0}
//                 boxShadow={"xl"}
//                 bg={popoverContentBgColor}
//                 p={4}
//                 rounded={"xl"}
//                 minW={"sm"}
//               >
//                 <Stack>
//                   {navItem.children.map((child) => (
//                     <DesktopSubNav key={child.label} {...child} />
//                   ))}
//                 </Stack>
//               </PopoverContent>
//             )}
//           </Popover>
//         </Box>
//       ))}
//     </Stack>
//   );
// };

// const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
//   return (
//     <Link
//       href={href}
//       role={"group"}
//       display={"block"}
//       p={2}
//       rounded={"md"}
//       _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
//       target="_blank"
//       rel="noopener noreferrer"
//     >
//       <Stack direction={"row"} align={"center"}>
//         <Box>
//           <ChakraText
//             transition={"all .3s ease"}
//             _groupHover={{ color: "pink.400" }}
//             fontWeight={500}
//           >
//             {label}
//           </ChakraText>
//           <ChakraText fontSize={"sm"}>{subLabel}</ChakraText>
//         </Box>
//         <Flex
//           transition={"all .3s ease"}
//           transform={"translateX(-10px)"}
//           opacity={0}
//           _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
//           justify={"flex-end"}
//           align={"center"}
//           flex={1}
//         >
//           <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
//         </Flex>
//       </Stack>
//     </Link>
//   );
// };

// const MobileNav = () => {
//   return (
//     <Stack
//       bg={useColorModeValue("white", "gray.800")}
//       p={4}
//       display={{ md: "none" }}
//     >
//       {NAV_ITEMS.map((navItem) => (
//         <MobileNavItem key={navItem.label} {...navItem} />
//       ))}
//     </Stack>
//   );
// };

// const MobileNavItem = ({ label, children, href }: NavItem) => {
//   const { isOpen, onToggle } = useDisclosure();

//   return (
//     <Stack spacing={4} onClick={children && onToggle}>
//       <Flex
//         py={2}
//         as={Link}
//         href={href ?? "#"}
//         justify={"space-between"}
//         align={"center"}
//         _hover={{
//           textDecoration: "none",
//         }}
//         target="_blank"
//         rel="noopener noreferrer"
//       >
//         <ChakraText
//           fontWeight={600}
//           color={useColorModeValue("gray.600", "gray.200")}
//         >
//           {label}
//         </ChakraText>
//         {children && (
//           <Icon
//             as={ChevronDownIcon}
//             transition={"all .25s ease-in-out"}
//             transform={isOpen ? "rotate(180deg)" : ""}
//             w={6}
//             h={6}
//           />
//         )}
//       </Flex>

//       <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
//         <Stack
//           mt={2}
//           pl={4}
//           borderLeft={1}
//           borderStyle={"solid"}
//           borderColor={useColorModeValue("gray.200", "gray.700")}
//           align={"start"}
//         >
//           {children &&
//             children.map((child) => (
//               <Link
//                 key={child.label}
//                 py={2}
//                 href={child.href}
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {child.label}
//               </Link>
//             ))}
//         </Stack>
//       </Collapse>
//     </Stack>
//   );
// };

// interface NavItem {
//   label: string;
//   subLabel?: string;
//   children?: Array<NavItem>;
//   href?: string;
// }

// const NAV_ITEMS: Array<NavItem> = [
//   {
//     label: "Dedust Price Chart (soon)",
//     href: "https://t.me/aquapony_channel", // External URL for Price Chart
//   },
//   {
//     label: "Telegram",
//     href: "https://t.me/aquapony_chat", // External URL for Telegram
//   },
// ];

import {
  Box,
  Flex,
  Text as ChakraText,
  IconButton,
  Button,
  Stack,
  Collapse,
  Icon,
  Link,
  Popover,
  PopoverTrigger,
  PopoverContent,
  useColorModeValue,
  useBreakpointValue,
  useDisclosure,
} from "@chakra-ui/react";
import {
  HamburgerIcon,
  CloseIcon,
  ChevronDownIcon,
  ChevronRightIcon,
} from "@chakra-ui/icons";

export default function Navbar() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Box>
      <Flex
        bg="black"
        color="white"
        minH={"60px"}
        py={{ base: 2, md: 4 }}
        px={{ base: 4, md: 8 }}
        borderBottom={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.900")}
        align={"center"}
        justify={"space-between"}
      >
        <Flex justify={{ base: "start", md: "start" }}>
          <Link
            href="https://aquapony-landing-page.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://raw.githubusercontent.com/activiteOCR/aquapony_landing_page/974ff4fe7929e3131824ca640e8df60325058af9/src/images/aquapony-sunglasses.svg"
              alt="Logo"
              style={{ maxHeight: "40px" }}
            />
          </Link>
        </Flex>

        <Flex display={{ base: "flex", md: "none" }}>
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>

        <Stack
          direction={"row"}
          spacing={4}
          align={"center"}
          display={{ base: "none", md: "flex" }}
        >
          <DesktopNav />
          <Button
            as={"a"}
            fontSize={"sm"}
            fontWeight={600}
            color={"white"}
            bg={"pink.400"}
            href="https://t.me/gasPump_bot/app?startapp=eyJyZWZfdXNlcl9pZCI6NTM3NTIxMzEyOSwidG9rZW5fYWRkcmVzcyI6IkVRQko4R0tJZV9wQy1wRjBpcUVhRldRQ1N4MzBFczZheXF4LXNpSmZEc3JXcjBxcyJ9"
            target="_blank"
            rel="noopener noreferrer"
            _hover={{
              bg: "pink.300",
            }}
          >
            Buy $GASAQA
          </Button>
        </Stack>
      </Flex>

      <Collapse in={isOpen} animateOpacity>
        <MobileNav />
      </Collapse>
    </Box>
  );
}

const DesktopNav = () => {
  const linkColor = "white";
  const linkHoverColor = useColorModeValue("gray.200", "white");
  const popoverContentBgColor = useColorModeValue("white", "gray.800");

  return (
    <Stack direction={"row"} spacing={4}>
      {NAV_ITEMS.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger={"hover"} placement={"bottom-start"}>
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize={"lg"}
                fontWeight={500}
                color={linkColor}
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>

            {navItem.children && (
              <PopoverContent
                border={0}
                boxShadow={"xl"}
                bg={popoverContentBgColor}
                p={4}
                rounded={"xl"}
                minW={"sm"}
              >
                <Stack>
                  {navItem.children.map((child) => (
                    <DesktopSubNav key={child.label} {...child} />
                  ))}
                </Stack>
              </PopoverContent>
            )}
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};

const DesktopSubNav = ({ label, href, subLabel }: NavItem) => {
  return (
    <Link
      href={href}
      role={"group"}
      display={"block"}
      p={2}
      rounded={"md"}
      _hover={{ bg: useColorModeValue("pink.50", "gray.900") }}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Stack direction={"row"} align={"center"}>
        <Box>
          <ChakraText
            transition={"all .3s ease"}
            _groupHover={{ color: "pink.400" }}
            fontWeight={500}
          >
            {label}
          </ChakraText>
          <ChakraText fontSize={"sm"}>{subLabel}</ChakraText>
        </Box>
        <Flex
          transition={"all .3s ease"}
          transform={"translateX(-10px)"}
          opacity={0}
          _groupHover={{ opacity: "100%", transform: "translateX(0)" }}
          justify={"flex-end"}
          align={"center"}
          flex={1}
        >
          <Icon color={"pink.400"} w={5} h={5} as={ChevronRightIcon} />
        </Flex>
      </Stack>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {NAV_ITEMS.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

const MobileNavItem = ({ label, children, href }: NavItem) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <Stack spacing={4} onClick={children && onToggle}>
      <Flex
        py={2}
        as={Link}
        href={href ?? "#"}
        justify={"space-between"}
        align={"center"}
        _hover={{
          textDecoration: "none",
        }}
        target="_blank"
        rel="noopener noreferrer"
      >
        <ChakraText
          fontWeight={600}
          color={useColorModeValue("gray.600", "gray.200")}
        >
          {label}
        </ChakraText>
        {children && (
          <Icon
            as={ChevronDownIcon}
            transition={"all .25s ease-in-out"}
            transform={isOpen ? "rotate(180deg)" : ""}
            w={6}
            h={6}
          />
        )}
      </Flex>

      <Collapse in={isOpen} animateOpacity style={{ marginTop: "0!important" }}>
        <Stack
          mt={2}
          pl={4}
          borderLeft={1}
          borderStyle={"solid"}
          borderColor={useColorModeValue("gray.200", "gray.700")}
          align={"start"}
        >
          {children &&
            children.map((child) => (
              <Link
                key={child.label}
                py={2}
                href={child.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {child.label}
              </Link>
            ))}
        </Stack>
      </Collapse>
    </Stack>
  );
};

interface NavItem {
  label: string;
  subLabel?: string;
  children?: Array<NavItem>;
  href?: string;
}

const NAV_ITEMS: Array<NavItem> = [
  {
    label: "Dedust Price Chart (soon)",
    href: "https://t.me/aquapony_channel",
  },
  {
    label: "Telegram",
    href: "https://t.me/aquapony_chat",
  },
];
