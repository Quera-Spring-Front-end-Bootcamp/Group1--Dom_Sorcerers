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
  Stack,
  ModalHeader,
} from "@chakra-ui/react";
import { CLoseIcon } from "../../Icons";
interface Props {
  onCloseModal: () => void;
  isShowModal: boolean;
}
export const NewWorkspaceModal = ({ isShowModal, onCloseModal }: Props) => {
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
                مرور اطلاعات
              </Text>
            </HStack>
          </ModalHeader>
          {/* //////////////////////////////////////////////////////////////////////////////////// */}
          <ModalBody padding="15px">
            <Stack gap="2px">summary</Stack>
          </ModalBody>
          {/* ///////////////////////////////////////////////////////////////////////////////////// */}
          <ModalFooter padding="0px 15px 15px">
            <Button
              background="#208D8E"
              fontSize="14px"
              mt="30px"
              width="100%"
              colorScheme="teal"
              variant="solid"
            >
              ساخت ورک‌اسپیس
            </Button>
          </ModalFooter>
          {/* ///////////////////////////////////////////////////////////////////////////////////// */}
        </ModalContent>
      </Modal>
    </>
  );
};
