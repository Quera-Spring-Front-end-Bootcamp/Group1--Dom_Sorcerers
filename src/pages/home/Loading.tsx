import { VStack, Text, Stack, Spinner } from "@chakra-ui/react";

const Loading = () => {
  return (
    <Stack
      height="100vh"
      bgGradient="linear(to-l,#4AB7D8, #118C80)"
      align="center"
      justify="center"
    >
      <VStack
        borderRadius="20px"
        bgColor="whiteAlpha.600"
        padding="50px"
        spacing="10px"
      >
        <Text
          fontWeight="800"
          fontSize="60px"
          bgGradient="linear(to-l,#4AB7D8, #118C80)"
          bgClip="text"
          textAlign="center"
          width="100%"
        >
          کوئرا تسک منیجر
        </Text>
        <Spinner
          width="90px"
          height="90px"
          thickness="5px"
          speed="0.8s"
          // emptyColor="whiteAlpha.600"
          color="#4AB7D8"
        />
      </VStack>
    </Stack>
  );
};

export default Loading;
