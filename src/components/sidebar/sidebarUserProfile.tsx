import { Flex, HStack, Text , Link } from "@chakra-ui/react";

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
      <Link href="profile">
      <Text fontSize="16px" color="#1E1E1E" fontWeight="500">
        نیلوفر محمدی
      </Text>
      </Link>
    </HStack>
  );
};

export default SidebarUserProfile;