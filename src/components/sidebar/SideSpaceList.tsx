import { Box } from "@chakra-ui/react";
import { AssignmentList } from "./AssigenmentList";

export const SideSpaceList = () => {
  return (
    <>
      <Box
        height="calc(100vh - 420px )"
        overflowY="auto"
        css={{
          "&::-webkit-scrollbar": {
            width: "7px",
          },
          "&::-webkit-scrollbar-track": {
            width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#eee",
            borderRadius: "24px",
          },
        }}
      >
        <AssignmentList />
      </Box>
    </>
  );
};
