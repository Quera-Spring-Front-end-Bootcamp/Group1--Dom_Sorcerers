import {
  HStack,
  Stack,
  Text,
  Input,
  Box,
  Flex,
  Collapse,
  useDisclosure,
  Spacer,
  Button,
} from "@chakra-ui/react";
import { TitleQueraTaskManager } from "../TitleQueraTaskManager";
import { ArrowDownIcon } from "../Icons/ArrowDownIcon";
import { ExitIcon, MagnifierIcon, PlusIcon } from "../Icons";
import { Assigenment } from "../../data/assignment";
const Sidebar = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
      <Stack
        borderLeft="0.5px solid rgba(170, 170, 170, 1)"
        as="aside"
        height="100vh"
        width="340px"
        background="#FAFBFC"
        alignItems="center"
        gap="31px"
        padding="40px 40px 30px 16px"
        position="sticky"
        right="0"
      >
        <TitleQueraTaskManager text="کوئرا تسک منیجر" />
        <Stack justifyContent="space-between" h="100%" width="100%">
          <Stack gap="13px">
            <HStack
              alignItems="center"
              justifyContent="space-between"
              width="100%"
            >
              <Text fontSize="16px" fontWeight="600" color="#000000">
                ورک اسپیس ها
              </Text>
              <HStack cursor="pointer" gap="19px" onClick={onToggle}>
                {/* <MagnifierIcon /> */}
                <ArrowDownIcon />
              </HStack>
            </HStack>
            <Collapse in={isOpen} animateOpacity>
              <Stack gap="8px">
                <HStack
                  background="#F6F7F9"
                  height="40px"
                  borderRadius="4px"
                  gap="2px"
                  role="group"

                  // _groupFocusWithin={{ border: "1px solid red" }}
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
                {Assigenment.map((item) => (
                  <HStack
                    key={item.id}
                    alignItems="center"
                    width="100%"
                    role="group"
                  >
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
              </Stack>
            </Collapse>
          </Stack>

          <Stack>
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
            <HStack _hover={{ cursor: "pointer" }} gap="8px">
              <ExitIcon />
              <Text
                fontWeight="400"
                fontSize="16px"
                color="rgba(129, 129, 129, 1)"
              >
                خروج
              </Text>
            </HStack>
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Sidebar;
