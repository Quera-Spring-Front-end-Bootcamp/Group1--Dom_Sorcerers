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
  Stack,
  ModalHeader,
  useDisclosure,
} from "@chakra-ui/react";
import { CLoseIcon } from "../../Icons";
import { NewWorkspaceColorModal } from "./NewWorkspaceColorModal";
interface Props {
  onCloseModal: () => void;
  isShowModal: boolean;
}
export const NewWorkspaceModal = ({ isShowModal, onCloseModal }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal size="6xl" isCentered isOpen={isShowModal} onClose={onCloseModal}>
        <ModalOverlay />
        <ModalContent borderRadius="12px" width="567px" padding="20px">
          {/* /////////////////////////////////////////////////////////////////////////////////// */}
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
                ساخت ورک‌اسپیس جدید
              </Text>
            </HStack>
          </ModalHeader>
          {/* //////////////////////////////////////////////////////////////////////////////////// */}
          <ModalBody padding="15px">
            <Stack gap="2px">
              <Text fontSize="14px">نا‌‌م ورک‌اسپیس</Text>
              <Input borderColor="#AAAAAA" width="100%" />
            </Stack>
          </ModalBody>
          {/* ///////////////////////////////////////////////////////////////////////////////////// */}
          <ModalFooter padding="0px 15px 15px" marginTop="20px">
            <Button
              background="#208D8E"
              fontSize="14px"
              mt="30px"
              width="100%"
              colorScheme="teal"
              variant="solid"
              onClick={() => {
                onCloseModal();
                onOpen();
              }}
            >
              ادامه
            </Button>
            <NewWorkspaceColorModal
              isShowModal={isOpen}
              onCloseModal={onClose}
            />
          </ModalFooter>
          {/* ///////////////////////////////////////////////////////////////////////////////////// */}
        </ModalContent>
      </Modal>
    </>
  );
};
