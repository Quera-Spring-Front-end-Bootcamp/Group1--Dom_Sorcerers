import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { FlagIcon } from "../Icons";
import DeleteIcon from "../Icons/deleteIcon";
import PriorityList from "../../data/priorityList";



const PriorityMenu = () => {
  return (
    <Menu>
      <MenuButton width="145px">اولویت</MenuButton>
      <MenuList minWidth="145px">
        {PriorityList.map((data) => (
          <MenuItem bgColor="white" _hover={{ bgColor: "white" }}>
            <FlagIcon color={data.color} />
            <Text pr="5px">{data.name}</Text>
          </MenuItem>
        ))}

        <MenuItem bgColor="white" _hover={{ bgColor: "white" }}>
          <DeleteIcon />
          <Text pr="5px">حذف اولویت</Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default PriorityMenu;
