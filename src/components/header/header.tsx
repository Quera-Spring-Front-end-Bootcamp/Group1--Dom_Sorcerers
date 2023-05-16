import { Flex, Image, Button, Spacer, Stack } from "@chakra-ui/react";

interface HeaderProps {
  linkText: string;
  btnText: string;
}

const logoStyle = {
  width: "223px",
  height: "35px",
};
const headerContainerStyle = {
  width: "100%",
};

const Header = ({ linkText, btnText }: HeaderProps) => {
  return (
    <Flex sx={headerContainerStyle}>
      <Image sx={logoStyle} src="src/assets/logo.png " />
      <Spacer />
      <Stack direction="row" spacing={5}>
        <Button colorScheme="#000" variant="link">
          {linkText}
        </Button>
        <Button colorScheme="teal" variant="solid">
          {btnText}
        </Button>
      </Stack>
    </Flex>
  );
};

export default Header;

// import { Flex, Image, Button, Spacer, Stack } from "@chakra-ui/react";
// const logoStyle = {
//   width: "223px",
//   height: "35px",
// };
// const headerContainerStyle = {
//   width: "100%",
// };
// const Header = () => {
//   return (
//     <Flex sx={headerContainerStyle}>
//       <Image sx={logoStyle} src="src/assets/logo.png " />
//       <Spacer />
//       <Stack direction="row" spacing={5}>
//         <Button colorScheme="#000" variant="link">
//           ثبت‌نام نکرده‌ای
//         </Button>
//         <Button colorScheme="teal" variant="solid">
//           ثبت‌نام
//         </Button>
//       </Stack>
//     </Flex>
//   );
// };

// export default Header;
