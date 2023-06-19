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
  Input,
} from "@chakra-ui/react";
import { CLoseIcon } from "../../../Icons";
import workSpace from "../../../../api/workSpace";

interface Props {
  isShowModal: boolean;
  onCloseModal: () => void;
  id: string;
}

type renameData = {
  name: string;
  usernameOrId: string;
  image: string;
};

export default function RenameWorkspaceModal({
  isShowModal,
  onCloseModal,
  id,
}: Props) {
  const toast = useToast();
  // const workSpaceCtx = useWorkspace();
  // const [project, setProject] = useState<createProjectType>({
  //   name: "",
  //   workspaceId: "",
  //   members: [],
  // });

  const handleRename = async () => {
    try {
      // await workSpace.renameWorkSpace(id,);
      toast({
        title: "ثبت‌ موفق",
        description: "تغییر نام با موفقیت انجام شد",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      onCloseModal();
      console.log("Workspace renamed successfully.");
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
                تغییر نام ورک‌اسپیس
              </Text>
            </HStack>
          </ModalHeader>
          <ModalBody>
            <Text margin="10px 0 15px">نام جدید ورک اسپیس را وارد کنید:</Text>
            <Input
              autoFocus
              placeholder="اسم قبلی"
              required
              type="text"
              // onChange={(e) => setProject({ ...project, name: e.target.value })}
            />
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
                انصراف
              </Button>
              <Button
                type="submit"
                background="#208D8E"
                fontSize="14px"
                mt="30px"
                width="200px"
                colorScheme="teal"
                variant="solid"
                onClick={handleRename}
                marginBottom="20px"
              >
                ثبت
              </Button>
            </ButtonGroup>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
