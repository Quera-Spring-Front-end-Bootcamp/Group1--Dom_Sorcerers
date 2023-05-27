import { extendTheme } from "@chakra-ui/react";
import { defineStyleConfig } from "@chakra-ui/react";

const Menu = defineStyleConfig({
  // The styles all button have in common
  baseStyle: {
    item: {
      fontSize: "12px",
    },
  },
});

const Theme = extendTheme({
  direction: "rtl",
  // colors: {
  //   primary: "#208D8E",
  //   hoverPrimary: "#1c8081",
  //   activePrimary: "#197172",
  //   rightGradient: "#06846F",
  //   leftGradient: "#118C80",
  // },
  fonts: {
    heading: "dana",
    body: "dana",
  },
  colors: {
    primary: {
      600: "#208D8E",
    },
  },
  components: {
    Menu,
  },
});

export default Theme;
