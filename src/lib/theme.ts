import { extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    50: "#e4f9ff",
    100: "#c1e9ff",
    200: "#97daff",
    300: "#5ccaff",
    400: "#00A8E8", // Primary color
    500: "#0094c2",
    600: "#00789a",
    700: "#005c73",
    800: "#00414c",
    900: "#00252e",
  },
  accent: {
    50: "#ffe3f2",
    100: "#ffb3d9",
    200: "#ff82bf",
    300: "#ff51a5",
    400: "#ff4081", // Secondary color
    500: "#db3168",
    600: "#b72451",
    700: "#921839",
    800: "#6e0d22",
    900: "#4a0410",
  },
  neonGreen: "#00C896",
  brightYellow: "#FFD700",
  background: "#1A1A2E",
};

const fonts = {
  heading: "Poppins, sans-serif",
  body: "Roboto, sans-serif",
};

const styles = {
  global: {
    body: {
      bg: "background",
      color: "white",
    },
  },
};

const components = {
  Button: {
    baseStyle: {
      fontWeight: "bold",
      textTransform: "uppercase",
      borderRadius: "8px",
    },
    sizes: {
      lg: {
        h: "48px",
        fontSize: "lg",
        px: "32px",
      },
    },
    variants: {
      solid: {
        bg: "brand.400",
        color: "white",
        _hover: {
          bg: "brand.500",
        },
      },
      outline: {
        borderColor: "brand.400",
        color: "brand.400",
        _hover: {
          bg: "brand.50",
        },
      },
    },
  },
  Card: {
    baseStyle: {
      shadow: "md",
      borderRadius: "8px",
      p: "4",
    },
  },
};

const theme = extendTheme({
  colors,
  fonts,
  styles,
  components,
  space: {
    section: "64px",
  },
});

export default theme;
