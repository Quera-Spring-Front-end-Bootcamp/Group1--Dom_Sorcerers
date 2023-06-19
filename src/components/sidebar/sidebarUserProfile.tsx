import { Flex, HStack, Text, Link } from "@chakra-ui/react";
import { useAuth } from "../../context/authContext";
import { useState, useEffect } from "react";

const SidebarUserProfile = () => {
  const authCtx = useAuth();
  const [username, setUsername] = useState("");

  useEffect(() => {
    if (!authCtx.userData) {
      const user = localStorage.getItem("userData");
      if (user) setUsername(JSON.parse(user).username);
    } else setUsername(authCtx.userData?.username);
  }, []);
  return (
    <HStack gap="8px">
      <Flex
        width="35px"
        height="35px"
        background="#EAF562"
        borderRadius="100%"
        alignItems="center"
        justifyContent="center"
      >
        <Text> {username.split(" ").map((word) => word[0])}</Text>
      </Flex>
      <Link href="profile">
        <Text fontSize="16px" color="#1E1E1E" fontWeight="500">
          {username}
        </Text>
      </Link>
    </HStack>
  );
};

export default SidebarUserProfile;
