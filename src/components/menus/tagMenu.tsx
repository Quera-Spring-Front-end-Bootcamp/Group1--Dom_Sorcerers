import { useState } from "react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { Input, InputLeftElement, InputGroup } from "@chakra-ui/react";
import { Text, HStack, Spacer } from "@chakra-ui/react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverBody,
} from "@chakra-ui/react";
import { Flex, Square, WrapItem, Wrap } from "@chakra-ui/react";
import { ColorPalletIcon, EditIcon, MagnifierIcon } from "../Icons";
import DeleteIcon from "../Icons/deleteIcon";
import MoreIcon from "../Icons/moreIcon";
import ColorDataList from "../../data/colorList";
import FlagIcone from "../Icons/flagIcone";

interface TagMenuProps {}

const TagMenu = () => {
  const [selected, setSelected] = useState<string>("");
  const [selected2, setSelected2] = useState<string>("");
  const [selected3, setSelected3] = useState<string>("");
  return (
    <Menu>
      <MenuButton>
        <FlagIcone />
      </MenuButton>
      <MenuList minWidth="145px">
        <InputGroup px="10px" pb="5px">
          <Input
            borderRadius="3px"
            fontSize="12px"
            placeholder="جستجو"
            bgColor="#E9E9E9"
            width="125px"
          />
          <InputLeftElement pr="10px" opacity="0.3">
            <MagnifierIcon />
          </InputLeftElement>
        </InputGroup>
        <HStack width="100%">
          <MenuItem
            bgColor="white"
            _hover={{ bgColor: "white" }}
            onClick={() => setSelected2("درس")}
            width="75%"
          >
            <Text p="5px" borderRadius="4px" bgColor="#EBC8C8">
              درس
            </Text>
            <Spacer />
          </MenuItem>

          {/* **************** more button ***************** */}

          <Menu>
            <MenuButton opacity="0.3" _hover={{ opacity: "1" }}>
              <MoreIcon />
            </MenuButton>
            <MenuList minWidth="145px">
              <MenuItem>
                <DeleteIcon />
                <Text pr="5px">حذف</Text>
              </MenuItem>
              <MenuItem>
                <EditIcon />
                <Text pr="5px">ویرایش تگ</Text>
              </MenuItem>

              {/* **************** color pallete ***************** */}
              <Popover>
                <PopoverTrigger>
                  <Flex cursor="pointer" p="10px">
                    <ColorPalletIcon />
                    <Text fontSize="12px" pr="5px">
                      ویرایش رنگ
                    </Text>
                  </Flex>
                </PopoverTrigger>
                <PopoverContent width="126px">
                  <PopoverBody>
                    <Wrap spacing="5px">
                      {ColorDataList.map((data) => (
                        <WrapItem>
                          <Square
                            size="16px"
                            bg={data.Color}
                            color="white"
                            borderRadius="5px"
                          />
                        </WrapItem>
                      ))}
                    </Wrap>
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </MenuList>
          </Menu>
        </HStack>
        <MenuItem onClick={() => setSelected3("کار")}>
          <Text p="5px" borderRadius="4px" bgColor="#C3B7F2">
            کار
          </Text>
        </MenuItem>
        <MenuItem onClick={() => setSelected3("پروژه")}>
          <Text p="5px" borderRadius="4px" bgColor="#7FFAFA">
            پروژه
          </Text>
        </MenuItem>
      </MenuList>
    </Menu>
  );
};

export default TagMenu;
