import { Stack } from "@chakra-ui/react";
import SidebarLogoutBtn from "./sidebarLogoutBtn";
import SidebarUserProfile from "./sidebarUserProfile";
import SidebarWorkSpace from "./sidebarWorkSpace";
import { Logo } from "../logo";
const Sidebar = () => {
  return (
    <>
      <Stack
        borderLeft="0.5px solid rgba(170, 170, 170, 1)"
        as="aside"
        height="100vh"
        width="340px"
        background="#FAFBFC"
        alignItems="center"
        gap="31px"
        padding="40px 40px 30px 16px"
        position="sticky"
        right="0"
      >
        {/* title */}
        <Logo />
        <Stack justifyContent="space-between" h="100%" width="100%">
          {/*Top section*/}
          <SidebarWorkSpace />
          {/*‌‌Bottom section*/}
          <Stack>
            <SidebarUserProfile />
            <SidebarLogoutBtn />
          </Stack>
        </Stack>
      </Stack>
    </>
  );
};

export default Sidebar;
