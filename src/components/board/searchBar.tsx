import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
  Button,
  Spacer,
  border,
  Flex,
  Box,
} from "@chakra-ui/react";
import { Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import {
  Text,
  HStack,
  Divider,
  Input,
  InputRightElement,
  InputLeftElement,
  InputGroup,
} from "@chakra-ui/react";
import { MagnifierIcon } from "../Icons";
import FilterIcon from "../Icons/filterIcon";
import { useState } from "react";
import DeleteIcon from "../Icons/deleteIcon";
import MoreIcon from "../Icons/moreIcon";

interface SearchBarProps {}

const SearchBar = () => {
  const [selected, setSelected] = useState<string>("");
  const [selected2, setSelected2] = useState<string>("");
  const [selected3, setSelected3] = useState<string>("");
  return (
    <>
      <Divider borderColor="#AAAAAA" zIndex="0" mt="1px" />

      <HStack py="5px">
        <HStack my="8px" h="25px">
          <MagnifierIcon />
          <Input
            fontSize="12px"
            width="227px"
            border="none"
            type="text"
            placeholder="جستجو بین تسک‌ها"
            padding="0"
            _focusVisible={{ outline: "none", boxShadow: "none" }}
          />

          <Divider opacity="1" borderColor="#AAAAAA" orientation="vertical" />
        </HStack>

        <Popover>
          <PopoverTrigger>
            <HStack justifyContent="center" alignItems="center" pr="20px">
              <FilterIcon />
              <Text fontSize="12px" fontWeight="500">
                فیلترها
              </Text>
            </HStack>
          </PopoverTrigger>
          <PopoverContent
            p="20px"
            width="700px"
            height="200px"
            boxShadow="0px 8px 16px rgba(0, 0, 0, 0.2)"
          >
            <PopoverCloseButton m="20px" />
            <PopoverHeader border="0px">
              <Text fontSize="24px" fontWeight="600">
                فیلترها
              </Text>
            </PopoverHeader>
            <PopoverBody>
              <HStack>
                <Text fontSize="14px">تسک‌هایی که </Text>
                <Menu>
                  <MenuButton width="175px">
                    <InputGroup>
                      <Input
                        fontSize="12px"
                        value={selected}
                        placeholder="انتخاب کنید"
                      />

                      <InputRightElement>
                        <ChevronDownIcon />
                      </InputRightElement>
                    </InputGroup>
                  </MenuButton>
                  <MenuList pt="0" minWidth="175px">
                    <Input
                      px="12px"
                      border="none"
                      fontSize="12px"
                      placeholder="جستجو"
                      _focusWithin={{ border: "none" }}
                    />
                    <Divider />
                    <MenuItem onClick={() => setSelected("تاریخ")}>
                      تاریخ
                    </MenuItem>
                    <MenuItem onClick={() => setSelected("تگ")}>تگ</MenuItem>
                    <MenuItem onClick={() => setSelected("اعضا")}>
                      اعضا
                    </MenuItem>
                    <MenuItem onClick={() => setSelected("اولویت")}>
                      اولویت
                    </MenuItem>
                  </MenuList>
                </Menu>

                <Text fontSize="14px">آن‌ها</Text>

                <Menu>
                  <MenuButton width="145px">
                    <InputGroup>
                      <Input
                        fontSize="12px"
                        value={selected2}
                        placeholder="انتخاب کنید"
                      />
                      <InputRightElement>
                        <ChevronDownIcon />
                      </InputRightElement>
                    </InputGroup>
                  </MenuButton>
                  <MenuList pt="0" minWidth="145px">
                    <Input
                      px="12px"
                      border="none"
                      fontSize="12px"
                      placeholder="جستجو"
                      _focusWithin={{ border: "none" }}
                    />
                    <Divider />
                    <MenuItem onClick={() => setSelected2("درس")}>
                      <Text p="5px" borderRadius="4px" bgColor="#EBC8C8">
                        درس
                      </Text>
                    </MenuItem>
                    <MenuItem onClick={() => setSelected2("کار")}>
                      <Text p="5px" borderRadius="4px" bgColor="#C3B7F2">
                        کار
                      </Text>
                    </MenuItem>
                    <MenuItem onClick={() => setSelected2("پروژه")}>
                      <Text p="5px" borderRadius="4px" bgColor="#7FFAFA">
                        پروژه
                      </Text>
                    </MenuItem>
                  </MenuList>
                </Menu>

                <Menu>
                  <MenuButton width="115px">
                    <InputGroup>
                      <Input
                        fontSize="12px"
                        value={selected3}
                        placeholder="انتخاب کنید"
                      />
                      <InputRightElement>
                        <ChevronDownIcon />
                      </InputRightElement>
                    </InputGroup>
                  </MenuButton>
                  <MenuList minW="115px">
                    <MenuItem onClick={() => setSelected3("است")}>است</MenuItem>
                    <MenuItem onClick={() => setSelected3("نیست")}>
                      نیست
                    </MenuItem>
                  </MenuList>
                </Menu>
                <Spacer />
                <DeleteIcon />
              </HStack>

              <Button
                colorScheme="white"
                fontSize="12px"
                color="#208D8E"
                p="0"
                mt="20px"
              >
                افزودن فیلتر جدید
              </Button>
            </PopoverBody>
          </PopoverContent>
        </Popover>

        <Menu>
          <MenuButton width="145px">تگ</MenuButton>
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
              <Box opacity="0.3">
                <MoreIcon />
              </Box>
            </HStack>
            <MenuItem onClick={() => setSelected2("کار")}>
              <Text p="5px" borderRadius="4px" bgColor="#C3B7F2">
                کار
              </Text>
            </MenuItem>
            <MenuItem onClick={() => setSelected2("پروژه")}>
              <Text p="5px" borderRadius="4px" bgColor="#7FFAFA">
                پروژه
              </Text>
            </MenuItem>
          </MenuList>
        </Menu>
      </HStack>

      <Divider borderColor="#AAAAAA" mb="20px" />
    </>
  );
};

export default SearchBar;