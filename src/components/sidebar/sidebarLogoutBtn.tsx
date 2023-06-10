import { HStack, Text, Button } from "@chakra-ui/react";
import { ExitIcon } from "../Icons/ExitIcon";
import authApi from "../../api/auth";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

const SidebarLogoutBtn = () => {
  const navigate = useNavigate();
  const authCtx = useAuth();
  return (
    <Button
      onClick={() => {
        authApi.logout();
        authCtx.setUserToken("");
        //navigate("/");
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
