import { HStack, Text } from "@chakra-ui/react";
import { PlusIcon } from "../Icons/PlusIcon";

const SidebarSpaceCTA = () => {
  return (
    <HStack
      background="#D3D3D3"
      height="32px"
      justifyContent="center"
      borderRadius="6px"
      cursor="pointer"
      alignItems="center"
      padding="10px"
    >
      <PlusIcon />
      <Text fontSize="12px" fontWeight="600" color="#1E1E1E">
        ساختن اسپیس جدید
      </Text>
    </HStack>
  );
};

export default SidebarSpaceCTA;
