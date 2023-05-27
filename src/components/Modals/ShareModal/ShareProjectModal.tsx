import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  Button,
  Text,
  ModalOverlay,
  HStack,
  Flex,
  Input,
  InputGroup,
  Stack,
  ModalHeader,
  Spacer,
  Box,
  Avatar,
  Select,
  InputRightAddon,
} from "@chakra-ui/react";
import { ShareLinkIcon, CLoseIcon } from "../../Icons";
interface Props {
  onCloseModal: () => void;
  isShowModal: boolean;
}
export const ShareProjectModal = ({ isShowModal, onCloseModal }: Props) => {
  return (
    <>
      <Modal
        size="6xl"
        isCentered
        isOpen={isShowModal}
        onClose={onCloseModal}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent borderRadius="12px" width="567px" padding="20px">
          <ModalHeader padding="0" marginBottom="40px">
            <HStack w="100%" alignItems="center">
              <Flex
                _hover={{ cursor: "pointer" }}
                onClick={onCloseModal}
                alignItems="center"
                justifyContent="center"
              >
                <CLoseIcon />
              </Flex>
              <Text
                width="100%"
                textAlign="center"
                fontSize="20px"
                fontWeight="500"
                color="#000"
              >
                اشتراک‌گذاری‌پروژه
              </Text>
            </HStack>
          </ModalHeader>

          <ModalBody padding="0">
            <Stack gap="20px">
              <Stack gap="29px">
                <InputGroup
                  _focusWithin={{
                    outline: "0px !important",
                    border: "0px !important",
                  }}
                  _focusVisible={{
                    outline: "none !important",
                    border: "none !important",
                    borderLeft: "none !important",
                  }}
                  borderRadius="8px"
                  background="#F0F1F3"
                  overflow="hidden"
                >
                  <Input
                    type="email"
                    height="40px"
                    placeholder="دعوت با ایمیل"
                    paddingRight="5px"
                    _placeholder={{
                      padding: "0",
                      fontSize: "14px",
                      fontWeight: "400",
                      color: "#A6A7A7",
                    }}
                    _focusWithin={{
                      outline: "none !important",
                      border: "1px solid #208D8E !important",
                      borderLeft: "none !important",
                    }}
                    _focusVisible={{
                      outline: "none !important",
                      borderLeft: "none !important",
                    }}
                  />
                  <InputRightAddon
                    as={Button}
                    color="#fff"
                    background="primary"
                    border="1px solid primary"
                    width="91px"
                    height="41px"
                    colorScheme="teal"
                  >
                    ارسال
                  </InputRightAddon>
                </InputGroup>
                <HStack>
                  <HStack>
                    <ShareLinkIcon />
                    <Text color="#1E1E1E" fontSize="14px" fontWeight="400">
                      لینک خصوصی
                    </Text>
                  </HStack>
                  <Spacer />
                  <Button
                    variant="outline"
                    width="69px"
                    height="23px"
                    fontSize="12px"
                    fontWeight="400"
                    color="#1E1E1E"
                  >
                    کپی لینک
                  </Button>
                </HStack>
                <Box color="#7D828C" fontSize="14px" fontWeight="400">
                  اشتراک گذاشته شده با
                </Box>
              </Stack>
              <Stack gap="12px">
                <HStack>
                  <HStack gap="">
                    <Avatar width="34px" height="34px" />
                    <Text fontSize="14px" fontWeight="400px" color="#1E1E1E">
                      من
                    </Text>
                    <Flex
                      justifyContent="center"
                      alignItems="center"
                      borderRadius="6px"
                      fontSize="12px"
                      fontWeight="400"
                      color="#1E1E1E"
                      width="109px"
                      height="26px"
                      background="#A5E4F8"
                    >
                      workspace owner
                    </Flex>
                  </HStack>
                  <Spacer />
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    fontSize="12px"
                    color="#A6A7A7"
                    fontWeight="400"
                    border="1px solid #A6A7A7"
                    borderRadius="6px"
                    width="83px"
                    height="27px"
                    _hover={{ cursor: "default" }}
                  >
                    دسترسی کامل
                  </Flex>
                </HStack>
                <HStack>
                  <HStack gap="">
                    <Avatar width="34px" height="34px" background="#F27474" />
                    <Text fontSize="14px" fontWeight="400px" color="#1E1E1E">
                      querabooot@gmail.com
                    </Text>
                  </HStack>
                  <Spacer />
                  <HStack>
                    <Select
                      fontSize="12px"
                      fontWeight="400"
                      // width="111px"
                      border="1px solid #E9EBF0"
                      height="27px"
                      _focusWithin={{
                        border: "1px solid teal",
                      }}
                      _focusVisible={{
                        border: "1px solid teal",
                        outline: "none",
                      }}
                    >
                      <option selected>دسترسی‌کامل</option>
                      <option>دسترسی‌ادیت</option>
                      <option>فقط‌خواندی</option>
                    </Select>
                    {/* <Select
                      fontSize="12px"
                      fontWeight="400"
                      // width="111px"
                      border="1px solid #E9EBF0"
                      height="27px"
                      _focusWithin={{
                        border: "1px solid teal",
                      }}
                      _focusVisible={{
                        border: "1px solid teal",
                        outline: "none",
                      }}
                    >
                      <option selected>همه‌پروژه‌ها</option>
                      <option>پروژه‌اول</option>
                      <option>پروژه‌دوم</option>
                      <option>فقط خواندنی</option>
                    </Select> */}
                  </HStack>
                </HStack>
                <HStack>
                  <HStack gap="">
                    <Avatar width="34px" height="34px" background="#F27474" />
                    <Text fontSize="14px" fontWeight="400px" color="#1E1E1E">
                      querabooot@gmail.com
                    </Text>
                  </HStack>
                  <Spacer />
                  <HStack>
                    <Select
                      fontSize="12px"
                      fontWeight="400"
                      // width="111px"
                      border="1px solid #E9EBF0"
                      height="27px"
                      _focusWithin={{
                        border: "1px solid teal",
                      }}
                      _focusVisible={{
                        border: "1px solid teal",
                        outline: "none",
                      }}
                    >
                      <option>دسترسی‌کامل</option>
                      <option selected>دسترسی‌ادیت</option>
                      <option>فقط‌خواندی</option>
                    </Select>
                    {/* <Select
                      fontSize="12px"
                      fontWeight="400"
                      // width="111px"
                      border="1px solid #E9EBF0"
                      height="27px"
                      _focusWithin={{
                        border: "1px solid teal",
                      }}
                      _focusVisible={{
                        border: "1px solid teal",
                        outline: "none",
                      }}
                    >
                      <option>همه‌پروژه‌ها</option>
                      <option selected>پروژه‌اول</option>
                      <option>پروژه‌دوم</option>
                    </Select> */}
                  </HStack>
                </HStack>
              </Stack>
            </Stack>
          </ModalBody>
          <ModalFooter padding="0px 15px 15px"></ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
