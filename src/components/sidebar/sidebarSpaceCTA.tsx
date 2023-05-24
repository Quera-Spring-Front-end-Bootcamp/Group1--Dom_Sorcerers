import { Button, HStack, Text, useDisclosure } from "@chakra-ui/react";
import { PlusIcon } from "../Icons/PlusIcon";
import { NewWorkspaceModal } from "../Modals/NewWorkspaceModal/NewWorkspaceModal";
import { ShareSpaceModal } from "../Modals/ShareModal/ShareSpaceModal";

const SidebarSpaceCTA = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button
        onClick={onOpen}
        background="#D3D3D3"
        height="32px"
        justifyContent="center"
        borderRadius="6px"
        cursor="pointer"
        alignItems="center"
        padding="10px"
      >
        <PlusIcon />
        <Text fontSize="12px" fontWeight="600" color="#1E1E1E" marginX="5px">
          ساختن اسپیس جدید
        </Text>
      </Button>
      <NewWorkspaceModal isShowModal={isOpen} onCloseModal={onClose} />
    </>
  );
};

export default SidebarSpaceCTA;
