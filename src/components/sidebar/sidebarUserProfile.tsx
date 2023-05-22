import { Flex, HStack, Text } from "@chakra-ui/react";

const SidebarUserProfile = () => {
  return (
    <HStack gap="8px">
      <Flex
        width="35px"
        height="35px"
        background="#EAF562"
        borderRadius="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Text>NM</Text>
      </Flex>
      <Text fontSize="16px" color="#1E1E1E" fontWeight="500">
        نیلوفر محمدی
      </Text>
    </HStack>
  );
};

export default SidebarUserProfile;
