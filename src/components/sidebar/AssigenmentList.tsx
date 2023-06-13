import { Accordion, Stack } from "@chakra-ui/react";

import {
  ColorPalletIcon,
  EditIcon,
  ShareLinkIcon,
  SimplePlusIcon,
  TrashIcon,
} from "../Icons";
import AssignmentItem from "./AssignmentItem";
import { useWorkspace } from "../../context/workspaceContext";
import workSpaceApi from "../../api/workSpace";
import { useEffect } from "react";

const modalData = [
  { id: 1, title: "ساختن پروژه جدید", icon: SimplePlusIcon },
  { id: 2, title: "ویرایش نام ورک‌اسپیس", icon: EditIcon },
  { id: 3, title: "ویرایش رنگ", icon: ColorPalletIcon },
  { id: 4, title: "کپی لینک", icon: ShareLinkIcon },
  { id: 5, title: "حذف", icon: TrashIcon },
];

type workSpaceType = {
  _id: string;
  name: string;
  user: string;
  members: object;
  projects: [];
}[];

export const AssignmentList = () => {
  const workSpaceCtx = useWorkspace();

  // const [workSpace, setWorkSpace] = useState<workSpaceType>([
  //   {
  //     _id: "",
  //     name: "",
  //     user: "",
  //     members: [],
  //     projects: [],
  //   },
  // ]);

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
              //color={item.color}
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
