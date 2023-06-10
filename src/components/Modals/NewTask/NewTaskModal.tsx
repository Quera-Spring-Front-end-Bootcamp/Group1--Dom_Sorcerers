import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Spacer,
  Stack,
  Text,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useToast,
} from "@chakra-ui/react";
import { useState } from "react";

import UploadIcon from "../../Icons/uploadIcon";
import CalendartwoIcon from "../../Icons/calendartwoIcon";
import AddUserIcon from "../../Icons/addUserIcon";
import RectangleIcon from "../../Icons/rectangleIcon";
import { EIcon } from "../../Icons/EIcon";
import TagMenu from "../../menus/tagMenu";
import PriorityMenu from "../../menus/priorityMenu";

import taskApi from "../../../api/task";

interface Props {
  onCloseModal: () => void;
  isShowModal: boolean;
}

export default function NewTaskModal({ isShowModal, onCloseModal }: Props) {
  const toast = useToast();
  const [taskData, settaskData] = useState({
    name: "task name 123",
    description: "",
    boardId: "646e905e35066827eebc6c79",
  });

  const handleCreate = async () => {
    try {
      console.log(taskData);
      const response = await taskApi.creattask(taskData);
      toast({
        title: "ثبت‌ موفق",
        description: "تسک شما با موفقیت ثبت شد.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      console.log(response.data);
      onCloseModal();
    } catch (ex) {
      toast({
        title: "خطا",
        description: "مشکلی پیش آمده است.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

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
        <ModalContent>
          <ModalHeader>
            <HStack>
              <RectangleIcon />
              <Text fontSize="28px" fontWeight="bold">
                عنوان تسک
              </Text>
            </HStack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            {/* -----------------------------aria----------------------------------------- */}
            <HStack mt="19px">
              <Text>در</Text>
              <Input
                placeholder="پروژه اول"
                width="158px"
                height="33px"
              ></Input>
              <Text>برای</Text>
              <AddUserIcon />
            </HStack>
            <Textarea
              resize="none"
              placeholder="توضیحاتی برای این تسک بنویسید"
              sx={{
                height: "220px",
                borderColor: "#AAAAAA",
                marginTop: "30px",
                alignItems: "flex-start",
              }}
              onChange={(e) =>
                settaskData({ ...taskData, description: e.target.value })
              }
            ></Textarea>
            <HStack py="20px">
              <Flex alignItems="center">
                <Text padding="10px"> افزودن پیوست</Text>
                <Button
                  sx={{
                    borderRadius: "4px",
                    border: "solid 1px",
                    borderColor: "primary.600",
                    padding: "8px",
                    bg: "white",
                  }}
                  leftIcon={<UploadIcon />}
                >
                  آپلود فایل
                </Button>
              </Flex>
            </HStack>
            <HStack alignItems="center" marginTop="15px">
              <Flex gap="10px">
                <TagMenu />

                <CalendartwoIcon />
                <PriorityMenu />

                <Box
                  position="relative"
                  _after={{
                    position: "absolute",
                    fontSize: "12px",
                    fontWeight: "500",
                    content: `"${(2).toLocaleString("fa-IR")}"`,
                    width: "17px",
                    height: "17px",
                    bg: "#4AB7D8",
                    top: "-8px",
                    right: "-7px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%",
                    padding: "2px",
                  }}
                >
                  <EIcon />
                </Box>
              </Flex>
              <Spacer />
              <Button
                onClick={handleCreate}
                sx={{
                  background: "#208D8E",
                  color: "#FFFFFF",
                  width: "119px",
                  borderRadius: "4px",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  py: "4px",
                  px: "7px",
                  gap: "10px",
                }}
                mr={2}
              >
                ساختن تسک
              </Button>
            </HStack>
            <Stack
              sx={{ justifyContent: "center", alignContent: "center" }}
              direction="row"
              spacing={2}
              mt="20px"
            ></Stack>
            {/* -----------------------------aria----------------------------------------- */}
          </ModalBody>
          {/* <ModalFooter></ModalFooter> */}
        </ModalContent>
      </Modal>
    </>
  );
}