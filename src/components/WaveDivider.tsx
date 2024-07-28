import { Box } from "@chakra-ui/react";

const WaveDivider = () => {
  return (
    <Box width="100%" overflow="hidden" lineHeight="0">
      <svg
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        style={{ width: "100%", height: "150px" }}
      >
        <path
          d="M0,0 C150,100 350,100 500,50 C650,0 850,0 1200,0 L1200,150 L0,150 Z"
          fill="white"
        />
      </svg>
    </Box>
  );
};

export default WaveDivider;
