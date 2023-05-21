import { HStack, Input } from "@chakra-ui/react";
import { MagnifierIcon } from "../Icons/MagnifierIcon";

const SidebarSearchBox = () => {
  return (
    <HStack
      background="#F6F7F9"
      height="40px"
      borderRadius="4px"
      gap="2px"
      role="group"
    >
      <HStack
        _groupFocusWithin={{
          borderBottom: "1px solid teal",
        }}
        width="100%"
        paddingRight="12px"
        borderRadius="4px"
      >
        <MagnifierIcon />
        <Input
          width="100%"
          border="none"
          type="text"
          placeholder="جستجو کنید"
          padding="0"
          _placeholder={{ color: "rgba(170, 170, 170, 1)" }}
          _focusVisible={{ outline: "none", boxShadow: "none" }}
        />
      </HStack>
    </HStack>
  );
};

export default SidebarSearchBox;
