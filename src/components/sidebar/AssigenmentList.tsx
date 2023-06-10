import { Accordion, Stack } from "@chakra-ui/react";

import {
  ColorPalletIcon,
  EditIcon,
  ShareLinkIcon,
  SimplePlusIcon,
  TrashIcon,
} from "../Icons";
import AssignmentItem from "./AssignmentItem";
import { Assigenment } from "../../data/assignment";
import { useState, useEffect } from "react";
import workSpaceApi from "../../api/workSpace";

const modalData = [
  { id: 1, title: "ساختن پروژه جدید", icon: SimplePlusIcon },
  { id: 2, title: "ویرایش نام ورک‌اسپیس", icon: EditIcon },
  { id: 3, title: "ویرایش رنگ", icon: ColorPalletIcon },
  { id: 4, title: "کپی لینک", icon: ShareLinkIcon },
  { id: 5, title: "حذف", icon: TrashIcon },
];

// type workSpaceType = {
//   _id: string;
//   name: string;
//   user: string;
//   members: [];
//   projects: [];
// }[];

export const AssignmentList = () => {
  const [workSpace, setWorkSpace] = useState([
    {
      _id: "",
      name: "",
      user: "",
      members: [],
      projects: [],
    },
  ]);

  useEffect(() => {
    fetchWorkspaces();
    console.log(workSpace);
  }, []);

  const fetchWorkspaces = async () => {
    const response = await workSpaceApi.getAllWorkSpace();
    setWorkSpace(response.data.data);
  };
  return (
    <>
      <Accordion allowToggle>
        <Stack gap="12px">
          {workSpace.map((item) => (
            <AssignmentItem
              key={item._id}
              id={item._id}
              //color={item.color}
              name={item.name}
              // hasSub={item?.hasSub}
              //subAss={item.subAss}
            />
          ))}
        </Stack>
      </Accordion>
      {/* <MoreModal isShow={isOpen} onCloseModal={onCloseModalHandler} /> */}
    </>
  );
};
