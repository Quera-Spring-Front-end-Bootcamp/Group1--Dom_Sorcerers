import {
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  Flex,
  HStack,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Portal,
  Spacer,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import {
  ColorPalletIcon,
  EditIcon,
  ShareButtonIcon,
  ShareLinkIcon,
  SimplePlusIcon,
  TrashIcon,
} from "../../components/Icons";

import { AssignmentSubItem } from "./AssignmentSubItem";
import { useState } from "react";
import { ShareSpaceModal } from "../../components/Modals/ShareModal/ShareSpaceModal";
import { useWorkspace } from "../../context/workspaceContext";

export interface Props {
  id: string;
  name: string;
  //onClickAssign : () => void
  //color: string;
  //hasSub?: boolean;
  //subAss?: { subId: number; subTitle: string }[];
}
export const AssignmentItem = (ass: Props) => {
  const workSpaceCtx = useWorkspace();

  const [isShowDots, setIsShowDots] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [projects, setProjects] = useState([]);

  //   useEffect(() => {
  // 	workSpaceCtx.workSpace
  //   }, []);

  const onClickAssign = () => {
    workSpaceCtx.setCurrentWorkspaceId(ass.id);
  };
  return (
    <>
      <AccordionItem border="none" background="none">
        {({ isExpanded }) => (
          <>
            <AccordionButton
              paddingRight="0"
              paddingTop="6px"
              paddingBottom="6px"
              borderRadius="4px"
              background={isExpanded ? "#E9F9FF" : "none"}
              _hover={{ background: "#E9F9FF" }}
              onMouseMove={() => setIsShowDots(true)}
              onMouseOut={() => setIsShowDots(false)}
            >
              <HStack width="100%">
                <HStack onClick={onClickAssign}>
                  <Box
                    width="20px"
                    height="20px"
                    borderRadius="4px"
                    //background={ass.color}
                  />
                  <Text fontSize="16px" color="#1E1E1E" fontWeight="500">
                    {ass.name}
                  </Text>
                </HStack>
                <Spacer />

                <Menu>
                  {isShowDots && (
                    <MenuButton
                      //   onClick={(e) => {
                      //     if (ass.hasSub) {
                      //       e.stopPropagation();
                      //     }
                      //   }}
                      bg="transparent"
                      _hover={{ bg: "transparent" }}
                      _focusWithin={{ bg: "transparent" }}
                      _active={{ bg: "transparent" }}
                    >
                      ...
                    </MenuButton>
                  )}
                  <Portal>
                    <MenuList
                      zIndex="1000"
                      minWidth="184px"
                      borderRadius="8px"
                      border="none"
                      boxShadow="0px 4px 16px rgba(0, 0, 0, 0.16)"
                    >
                      <MenuItem gap="10px">
                        <Flex
                          width="20px"
                          height="20px"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <SimplePlusIcon />
                        </Flex>
                        <Text fontSize="14px" fontWeight="400" color="#1E1E1E">
                          ساختن پروژه‌جدید
                        </Text>
                      </MenuItem>
                      <MenuItem gap="10px">
                        <Flex
                          width="20px"
                          height="20px"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <EditIcon />
                        </Flex>
                        <Text fontSize="14px" fontWeight="400" color="#1E1E1E">
                          ویرایش نام‌ورک‌اسپیس
                        </Text>
                      </MenuItem>
                      <MenuItem gap="10px">
                        <Flex
                          width="20px"
                          height="20px"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <ColorPalletIcon />
                        </Flex>
                        <Text fontSize="14px" fontWeight="400" color="#1E1E1E">
                          ویرایش رنگ
                        </Text>
                      </MenuItem>
                      <MenuItem gap="10px">
                        <Flex
                          width="20px"
                          height="20px"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <ShareLinkIcon />
                        </Flex>
                        <Text fontSize="14px" fontWeight="400" color="#1E1E1E">
                          کپی لینک
                        </Text>
                      </MenuItem>
                      <MenuItem gap="10px">
                        <Flex
                          width="20px"
                          height="20px"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <TrashIcon />
                        </Flex>
                        <Text fontSize="14px" fontWeight="400" color="#9F0000">
                          حذف
                        </Text>
                      </MenuItem>
                      <MenuItem _hover={{ bg: "none" }}>
                        <Button
                          background="primary.600"
                          colorScheme="teal"
                          width="100%"
                          color="white"
                          flexDirection="row"
                          gap="10px"
                          alignItems="center"
                          onClick={() => {
                            // onCloseModal();
                            onOpen();
                          }}
                        >
                          <ShareButtonIcon />
                          <Text color="#fff">اشتراک گذاری</Text>
                        </Button>
                      </MenuItem>
                    </MenuList>
                  </Portal>
                </Menu>
              </HStack>
            </AccordionButton>
            {/* {ass.projects?.map((subItem) => (
              <AccordionPanel key={subItem.} paddingBottom="0">
                <Stack gap="12px">
                  //
                  <AssignmentSubItem
                    key={subItem.subId}
                    subId={subItem.subId}
                    subTitle={subItem.subTitle}
                  />
                </Stack>
              </AccordionPanel>
            ))} */}
          </>
        )}
      </AccordionItem>
      <ShareSpaceModal isShowModal={isOpen} onCloseModal={onClose} />
    </>
  );
};

export default AssignmentItem;
