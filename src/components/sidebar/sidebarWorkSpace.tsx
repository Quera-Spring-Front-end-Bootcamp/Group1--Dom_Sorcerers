import { Collapse, HStack, Stack, Text, useDisclosure } from "@chakra-ui/react";
import { ArrowDownIcon } from "../Icons/ArrowDownIcon";
import SidebarSearchBox from "./sidebarSearchBox";
import SidebarSpaceCTA from "./sidebarSpaceCTA";
import { SideSpaceList } from "./SideSpaceList";

const SidebarWorkSpace = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <Stack gap="13px">
      <HStack alignItems="center" justifyContent="space-between" width="100%">
        <Text fontSize="16px" fontWeight="600" color="#000000">
          ورک اسپیس ها
        </Text>
        <HStack cursor="pointer" gap="19px" onClick={onToggle}>
          <ArrowDownIcon />
        </HStack>
      </HStack>
      <Collapse in={isOpen} animateOpacity>
        <Stack gap="8px">
          <SidebarSearchBox />
          <SidebarSpaceCTA />
          <SideSpaceList />
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default SidebarWorkSpace;
