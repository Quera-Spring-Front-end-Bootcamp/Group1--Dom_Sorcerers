import { HStack, Text } from "@chakra-ui/react";
import { ExitIcon } from "../Icons/ExitIcon";

const SidebarLogoutBtn = () => {
  return (
    <HStack _hover={{ cursor: "pointer" }} gap="8px">
      <ExitIcon />
      <Text fontWeight="400" fontSize="16px" color="rgba(129, 129, 129, 1)">
        خروج
      </Text>
    </HStack>
  );
};

export default SidebarLogoutBtn;
