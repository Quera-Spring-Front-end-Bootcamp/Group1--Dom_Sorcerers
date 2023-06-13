import { HStack, Text, Button } from "@chakra-ui/react";
import { ExitIcon } from "../Icons/ExitIcon";
import authApi from "../../api/auth";
import { useAuth } from "../../context/authContext";
import { useWorkspace } from "../../context/workspaceContext";

const SidebarLogoutBtn = () => {
  const authCtx = useAuth();
  const workspaceCtx = useWorkspace();
  return (
    <Button
      onClick={() => {
        authApi.logout();
        authCtx.setUserToken("");
        authCtx.setUserAllData(null);
        localStorage.removeItem("userData");
        workspaceCtx.setCurrentWorkspaceId("");
        workspaceCtx.setAllWorkSpace(null);
        workspaceCtx.setCurrentProject(null);
        workspaceCtx.setCurrentBoards(null);
      }}
    >
      <HStack _hover={{ cursor: "pointer" }} gap="8px">
        <ExitIcon />
        <Text fontWeight="400" fontSize="16px" color="rgba(129, 129, 129, 1)">
          خروج
        </Text>
      </HStack>
    </Button>
  );
};

export default SidebarLogoutBtn;
