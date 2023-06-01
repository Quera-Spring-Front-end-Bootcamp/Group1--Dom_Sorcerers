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
} from "@chakra-ui/react";
import TagIcon from "../../Icons/tagIcon";
import UploadIcon from "../../Icons/uploadIcon";
import CalendartwoIcon from "../../Icons/calendartwoIcon";
import FlagIcone from "../../Icons/flagIcone";
import AddUserIcon from "../../Icons/addUserIcon";
import RectangleIcon from "../../Icons/rectangleIcon";
import { EIcon } from "../../Icons/EIcon";

const inputStyle = {
  height: "220px",
  borderColor: "#AAAAAA",
  marginTop: "30px",
  alignItems: "flex-start",
};
const submitBtn = {
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
};
const uploadBtn = {
  borderRadius: "4px",
  borderColor: "primary.600",
  padding: "8px",
  bg: "white",
};

interface Props {
  onCloseModal: () => void;
  isShowModal: boolean;
}

export default function NewTaskModal({ isShowModal, onCloseModal }: Props) {
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
              <Text>یرای</Text>
              <AddUserIcon />
            </HStack>
            <Textarea
              resize="none"
              placeholder="توضیحاتی برای این تسک بنویسید"
              sx={inputStyle}
            ></Textarea>
            <HStack py="20px">
              <Flex alignItems="center">
                <Text padding="10px"> افزودن پیوست</Text>
                <Button sx={uploadBtn} leftIcon={<UploadIcon />}>
                  آپلود فایل{" "}
                </Button>
              </Flex>
            </HStack>
            <HStack alignItems="center" marginTop="15px">
              <Flex gap="10px">
                <FlagIcone />
                <CalendartwoIcon />
                <TagIcon />
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
              <Button sx={submitBtn} mr={2}>
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
