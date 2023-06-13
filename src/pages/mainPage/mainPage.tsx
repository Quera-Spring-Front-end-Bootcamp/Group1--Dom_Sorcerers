import { HStack } from "@chakra-ui/react";

// ----------------------temp 0----------------------------
import { Button, useDisclosure } from "@chakra-ui/react";
// ----------------------temp 0----------------------------

import Board from "../../components/board/board";
import Sidebar from "../../components/sidebar/sidebar";
import NewProjectModal from "../../components/Modals/NewProject/NewProjectModal";

const MainPage = () => {
  // ----------------------temp 1----------------------------
  const { isOpen, onOpen, onClose } = useDisclosure();
  // ----------------------temp 1----------------------------
  return (
    <>
      <HStack bgColor="#FAFBFC">
        <Sidebar />
        <Board />
        {/* -----------------------------temp 2-------------------------------- */}
        <HStack>
          <Button onClick={onOpen}>new project</Button>
          <NewProjectModal isShowModal={isOpen} onCloseModal={onClose} />
        </HStack>
        {/* -----------------------------temp 2-------------------------------- */}
      </HStack>
    </>
  );
};

export default MainPage;
