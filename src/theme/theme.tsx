import { extendTheme } from "@chakra-ui/react";

const Theme = extendTheme({
  direction: "rtl",
  colors: {
    primary: "#208D8E",
    hoverPrimary: "#1c8081",
    activePrimary: "#197172",
    rightGradient: "#06846F",
    leftGradient: "#118C80",
  },
  fonts: {
    heading: "dana",
    body: "dana",
  },
  colors: {
    primary: {
      600: "#208D8E",
    },
  },
});

export default Theme;
