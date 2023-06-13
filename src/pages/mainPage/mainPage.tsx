import { HStack } from "@chakra-ui/react";

import Board from "../../components/board/board";
import Sidebar from "../../components/sidebar/sidebar";
import NewProjectModal from "../../components/Modals/NewProject/NewProjectModal";

const MainPage = () => {
  return (
    <>
      <HStack bgColor="#FAFBFC">
        <Sidebar />
        <Board />
      </HStack>
    </>
  );
};

export default MainPage;
