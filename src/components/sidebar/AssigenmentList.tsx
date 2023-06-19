import { Accordion, Stack } from "@chakra-ui/react";
import AssignmentItem from "./AssignmentItem";
import { useWorkspace } from "../../context/workspaceContext";
import workSpaceApi from "../../api/workSpace";
import { useEffect } from "react";

// type workSpaceType = {
//   _id: string;
//   name: string;
//   user: string;
//   members: object;
//   projects: [];
// }[];

// const [workSpace, setWorkSpace] = useState<workSpaceType>([
//   {
//     _id: "",
//     name: "",
//     user: "",
//     members: [],
//     projects: [],
//   },
// ]);

export const AssignmentList = () => {
  const workSpaceCtx = useWorkspace();

  const fetchWorkspaces = async () => {
    const response = await workSpaceApi.getAllWorkSpace();
    workSpaceCtx.setAllWorkSpace(
      JSON.parse(JSON.stringify(response.data.data))
    );
    console.log(response.data.data);
  };

  useEffect(() => {
    fetchWorkspaces();
  }, []);

  return (
    <>
      <Accordion allowToggle>
        <Stack gap="5px">
          {workSpaceCtx.workSpace?.map((item) => (
            <AssignmentItem
              key={item._id}
              id={item._id}
              color={"#80DC69"}
              name={item.name}
              // hasSub={item?.hasSub}
            />
          ))}
        </Stack>
      </Accordion>
      {/* <MoreModal isShow={isOpen} onCloseModal={onCloseModalHandler} /> */}
    </>
  );
};
