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
import { useWorkspace } from "../../../context/workspaceContext";
type boardsType = {
  _id: string;
  name: string;
  position: number;
  project: string;
  tasks: taskType | null;
}[];

type taskType = {
  _id: string;
  name: string;
  description: string;
  label: [];
  board: string;
  taskTags: [];
  taskAssigns: [];
  comments: [];
  position: 1;
}[];

interface NewBoardModalProps {
  isShowModal: boolean;
  onCloseModal: () => void;
  id: string;
  boards: boardsType;
}

const NewBoardModal: React.FC<NewBoardModalProps> = ({
  isShowModal,
  onCloseModal,
  id,
  boards,
  // setBoards,
}) => {
  console.log(id);
  const toast = useToast();
  const [boardName, setBoardName] = useState("");

  const workspaceCtx = useWorkspace();
  const fetchBoards = async () => {
    // console.log("projectId");
    // console.log(workspaceCtx.projectId);
    if (workspaceCtx.project) {
      const response = await boardApi.getAllProjectBoards(
        workspaceCtx.project._id
      );
      // setBoards(response.data.data);
      workspaceCtx.setCurrentBoards(response.data.data);
    }
  };

  const handleCreate = async () => {
    try {
      const response = await boardApi.creatBoard({
        name: boardName,
        projectId: id,
      });
      // const data = response.data.data;

      fetchBoards();

      toast({
        title: "ثبت موفق",
        description: "ستون جدید با موفقیت ایجاد شد.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });

      // const _boards = [...boards];
      // const _board = {
      //   _id: data._id,
      //   name: data.name,
      //   position: data.position,
      //   project: data.project,
      //   tasks: null,
      // };
      // _boards.push(_board);
      // workSpaceCtx.setCurrentBoards(_boards);

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
