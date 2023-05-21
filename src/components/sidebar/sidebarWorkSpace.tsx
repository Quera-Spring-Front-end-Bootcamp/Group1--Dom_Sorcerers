import {
  Box,
  Collapse,
  HStack,
  Spacer,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { ArrowDownIcon } from "../Icons/ArrowDownIcon";
import SidebarSearchBox from "./sidebarSearchBox";
import SidebarSpaceCTA from "./sidebarSpaceCTA";
import { Assigenment } from "../../data/assignment";

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
          {/* ****************List*************/}
          {Assigenment.map((item) => (
            <HStack key={item.id} alignItems="center" width="100%" role="group">
              <HStack justifyContent="space-between">
                <Box
                  width="20px"
                  height="20px"
                  background={item.color}
                  borderRadius="4px"
                />
                <Text fontSize="16px" color="#1E1E1E" fontWeight="500">
                  {item.title}
                </Text>
              </HStack>
              <Spacer />
              <Text display="none" _groupHover={{ display: "block" }}>
                ...
              </Text>
            </HStack>
          ))}
          {/* ****************List  END*************/}
        </Stack>
      </Collapse>
    </Stack>
  );
};

export default SidebarWorkSpace;
