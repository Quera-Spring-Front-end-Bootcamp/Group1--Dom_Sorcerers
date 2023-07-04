import React, { useState } from "react";
import {
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useToast,
  Flex,
  Input,
} from "@chakra-ui/react";
import boardApi from "../../../api/board";
import { CloseIcon } from "@chakra-ui/icons";

interface NewBoardModalProps {
  isShowModal: boolean;
  onCloseModal: () => void;
  id: string;
}

const NewBoardModal: React.FC<NewBoardModalProps> = ({
  isShowModal,
  onCloseModal,
  id,
}) => {
  console.log(id);
  const toast = useToast();
  const [boardName, setBoardName] = useState("");

  const handleCreate = async () => {
    try {
      const response = await boardApi.creatBoard({
        name: boardName,
        projectid: id,
        color: "#fffff",
      });

      toast({
        title: "ثبت موفق",
        description: "ستون جدید با موفقیت ایجاد شد.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      onCloseModal();
    } catch (ex) {
      console.log(ex);
      toast({
        title: "خطا",
        description: "مشکلی در ایجاد ستون جدید پیش آمده است.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Modal
        isCentered
        isOpen={isShowModal}
        onClose={onCloseModal}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex w="100%" alignItems="center">
              <Flex
                _hover={{ cursor: "pointer" }}
                onClick={onCloseModal}
                alignItems="center"
                justifyContent="center"
                zIndex="10"
              >
                <CloseIcon />
              </Flex>
              <Text
                width="100%"
                textAlign="center"
                fontSize="20px"
                fontWeight="500"
                color="#000"
              >
                ساخت ستون جدید
              </Text>
            </Flex>
          </ModalHeader>
          <ModalBody>
            <Text marginBottom="15px">نام ستون</Text>
            <Input
              autoFocus
              required
              type="text"
              onChange={(e) => setBoardName(e.target.value)}
            />
            <Button
              type="submit"
              background="#208D8E"
              fontSize="14px"
              mt="30px"
              width="100%"
              colorScheme="teal"
              variant="solid"
              onClick={handleCreate}
              marginBottom="20px"
            >
              ساخت ستون
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewBoardModal;
