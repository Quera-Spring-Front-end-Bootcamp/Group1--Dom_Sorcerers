import { HStack, Text, Link, Button } from "@chakra-ui/react";
import { ExitIcon } from "../Icons/ExitIcon";
import authApi from "../../api/auth";
import { useNavigate } from "react-router-dom";

const SidebarLogoutBtn = () => {
  const navigate = useNavigate();
  return (
    <Button
      onClick={() => {
        authApi.logout();
        navigate("/");
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
