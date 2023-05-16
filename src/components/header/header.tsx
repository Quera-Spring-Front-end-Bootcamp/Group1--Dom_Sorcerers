import {
  Flex,
  Image,
  Button,
  Spacer,
  Stack,
  Text,
  Link,
} from "@chakra-ui/react";

interface HeaderProps {
  linkText: string;
  btnText: string;
  path: string;
}

const logoStyle = {
  width: "223px",
  height: "35px",
};
const headerContainerStyle = {
  width: "100%",
};

const Header = ({ linkText, btnText, path }: HeaderProps) => {
  return (
    <Flex sx={headerContainerStyle}>
      <Image sx={logoStyle} src="src/assets/logo.png " />
      <Spacer />
      <Stack direction="row" spacing={5} sx={{ alignItems: "center" }}>
        <Text>{linkText}</Text>
        <Link href={path}>
          <Button colorScheme="teal" variant="solid">
            {btnText}
          </Button>
        </Link>
      </Stack>
    </Flex>
  );
};

export default Header;
