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
  Input,
} from "@chakra-ui/react";
import { useState, useEffect } from "react";
import { CLoseIcon } from "../../Icons";
import projectApi from "../../../api/project";
import { useWorkspace } from "../../../context/workspaceContext";

interface Props {
  onCloseModal: () => void;
  isShowModal: boolean;
}

type createProjectType = {
  name: string;
  workspaceId: string;
  members: [];
};

export default function NewProjectModal({ isShowModal, onCloseModal }: Props) {
  const toast = useToast();
  const workSpaceCtx = useWorkspace();
  const [project, setProject] = useState<createProjectType>({
    name: "",
    workspaceId: workSpaceCtx.workSpaceId,
    members: [],
  });

  // useEffect(() => {
  //   setProject({ ...project, workspaceId: workSpaceCtx.workSpaceId });
  //   console.log(project);
  // }, []);

  const handleCreate = async () => {
    try {
      //console.log(taskData);
      const response = await projectApi.createProject(project);
      toast({
        title: "ثبت‌ موفق",
        description: "پروژه شما با موفقیت ثبت شد.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      // console.log(response.data);
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
                ساخت پروژه جدید{workSpaceCtx.workSpaceId}
              </Text>
            </HStack>
          </ModalHeader>
          <ModalBody>
            <Text marginBottom="15px">نام پروژه</Text>
            <Input
              autoFocus
              required
              type="text"
              onChange={(e) => setProject({ ...project, name: e.target.value })}
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
              ساخت پروژه
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
