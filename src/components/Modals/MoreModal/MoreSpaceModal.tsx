import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Button,
  List,
  ListItem,
  ListIcon,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  ColorPalletIcon,
  EditIcon,
  ShareLinkIcon,
  SimplePlusIcon,
  TrashIcon,
  ShareButtonIcon,
} from "../../Icons";
import { ShareSpaceModal } from "../ShareModal/ShareSpaceModal copy";
interface Props {
  onCloseModal: () => void;
  isShow: boolean;
}
const modalData = [
  { id: 1, title: "ساختن پروژه جدید", icon: SimplePlusIcon },
  { id: 2, title: "ویرایش نام ورک اسپیس", icon: EditIcon },
  { id: 3, title: "ویرایش رنگ", icon: ColorPalletIcon },
  { id: 4, title: "کپی لینک", icon: ShareLinkIcon },
  { id: 5, title: "حذف", icon: TrashIcon },
];
export const MoreSpaceModal = ({ isShow, onCloseModal }: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal
        isCentered
        isOpen={isShow}
        onClose={onCloseModal}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />

        <ModalContent w="195px" padding="0">
          {/* <ModalHeader>Modal Title</ModalHeader> */}
          {/* <ModalCloseButton /> */}
          <ModalBody padding="15px 15px">
            <List spacing="12px">
              {modalData.map((item) => (
                <ListItem
                  key={item.id}
                  display="flex"
                  alignItems="center"
                  gap="10px"
                  _hover={{ cursor: "pointer" }}
                >
                  <ListIcon as={item.icon} />
                  <Text
                    fontStyle="normal"
                    fontSize="14px"
                    fontWeight="400"
                    color={item.icon === TrashIcon ? "#9F0000" : "#1E1E1E"}
                  >
                    {item.title}
                  </Text>
                </ListItem>
              ))}
            </List>
          </ModalBody>

          <ModalFooter padding="0px 15px 15px">
            <Button
              background="primary.600"
              colorScheme="primary"
              width="100%"
              // color="white"
              flexDirection="row"
              gap="10px"
              alignItems="center"
              onClick={() => {
                onCloseModal();
                onOpen();
              }}
            >
              <ShareButtonIcon />
              <Text color="#fff">اشتراک گذاری</Text>
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      <ShareSpaceModal isShowModal={isOpen} onCloseModal={onClose} />
    </>
  );
};
