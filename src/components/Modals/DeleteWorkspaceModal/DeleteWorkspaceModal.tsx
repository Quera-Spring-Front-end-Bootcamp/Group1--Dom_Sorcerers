import {
  Button,
  HStack,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useToast,
  Flex,
  ButtonGroup,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { CLoseIcon } from "../../Icons";
import projectApi from "../../../api/project";
import workSpace from "../../../api/workSpace";
import { useWorkspace } from "../../../context/workspaceContext";

interface Props {
  isShowModal: boolean;
  onCloseModal: () => void;
  id: string;
}

type createProjectType = {
  name: string;
  workspaceId: string;
  members: [];
};

export default function DeleteWorkspaceModal({
  isShowModal,
  onCloseModal,
  id,
}: Props) {
  const toast = useToast();
  const workSpaceCtx = useWorkspace();
  const [project, setProject] = useState<createProjectType>({
    name: "",
    workspaceId: "",
    members: [],
  });

  useEffect(() => {
    setProject({ ...project, workspaceId: id });
    // console.log(project);
  }, []);

  const handleDelete = async () => {
    onCloseModal();
    try {
      await workSpace.deleteWorkSpace(id);
      toast({
        title: "ثبت‌ موفق",
        description: "ورک‌اسپیس با موفقیت حذف شد",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      console.log("Workspace deleted successfully.");
    } catch (ex) {
      toast({
        title: "خطا",
        description: "مشکلی پیش آمده است.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      console.log(ex);
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
            <HStack w="100%" alignItems="center">
              <Flex
                _hover={{ cursor: "pointer" }}
                onClick={onCloseModal}
                alignItems="center"
                justifyContent="center"
                zIndex="10"
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
                حذف ورک‌اسپیس
              </Text>
            </HStack>
          </ModalHeader>
          <ModalBody>
            <Text marginBottom="0 15px 15px">
              آیا از پاک کردن ورک‌اسپیس اطمینان دارید؟؟
            </Text>
            <ButtonGroup>
              <Button
                type="submit"
                background="red.500"
                fontSize="14px"
                mt="30px"
                width="200px"
                colorScheme="red"
                variant="solid"
                onClick={onCloseModal}
                marginBottom="20px"
              >
                خیر
              </Button>
              <Button
                type="submit"
                background="#208D8E"
                fontSize="14px"
                mt="30px"
                width="200px"
                colorScheme="teal"
                variant="solid"
                onClick={handleDelete}
                marginBottom="20px"
              >
                بله
              </Button>
            </ButtonGroup>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
