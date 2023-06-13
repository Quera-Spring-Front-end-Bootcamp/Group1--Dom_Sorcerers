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
import { useState, useEffect } from "react";
import { ShareSpaceModal } from "../../components/Modals/ShareModal/ShareSpaceModal";
import { useWorkspace } from "../../context/workspaceContext";
import projectApi from "../../api/project";
import NewProjectModal from "../../components/Modals/NewProject/NewProjectModal";

export interface Props {
  id: string;
  name: string;
  //onClickAssign : () => void
  //color: string;
  //hasSub?: boolean;
  //subAss?: { subId: number; subTitle: string }[];
}
type projectsType = {
  _id: string;
  name: string;
  workspace: string;
  members: [];
  board: [];
}[];
export const AssignmentItem = (workspace: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const modal2 = useDisclosure();
  const workSpaceCtx = useWorkspace();
  const [projects, setProjects] = useState<projectsType>([
    {
      _id: "",
      name: "",
      workspace: "",
      members: [],
      board: [],
    },
  ]);

  const [isShowDots, setIsShowDots] = useState(false);

  const fetchProject = async () => {
    const response = await projectApi.getProjectByWorkSpaceId(workspace.id);
    setProjects(response.data.data);
  };

  const onClickWorkSpace = () => {
    workSpaceCtx.setCurrentWorkspaceId(workspace.id);
    fetchProject();
  };

  const onClickMenu = (e: React.MouseEvent) => {
    e.stopPropagation();

    workSpaceCtx.setCurrentWorkspaceId(workspace.id);
    console.log(workspace.id);
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
                <HStack flex="10" onClick={onClickWorkSpace}>
                  <Box
                    width="20px"
                    height="20px"
                    borderRadius="4px"
                    //background={workspace.color}
                  />
                  <Text
                    textAlign="right"
                    width="100%"
                    fontSize="16px"
                    color="#1E1E1E"
                    fontWeight="500"
                  >
                    {workspace.name}
                  </Text>
                </HStack>

                <HStack flex="0.1">
                  <Menu>
                    {isShowDots && (
                      <MenuButton
                        m="0px"
                        onClick={(e) => onClickMenu(e)}
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
                          <Text
                            onClick={(e) => {
                              e.stopPropagation();
                              modal2.onOpen();
                            }}
                            fontSize="14px"
                            fontWeight="400"
                            color="#1E1E1E"
                          >
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
                          <Text
                            fontSize="14px"
                            fontWeight="400"
                            color="#1E1E1E"
                          >
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
                          <Text
                            fontSize="14px"
                            fontWeight="400"
                            color="#1E1E1E"
                          >
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
                          <Text
                            fontSize="14px"
                            fontWeight="400"
                            color="#1E1E1E"
                          >
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
                          <Text
                            fontSize="14px"
                            fontWeight="400"
                            color="#9F0000"
                          >
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
              </HStack>
            </AccordionButton>
            <NewProjectModal
              projects={projects}
              setProjects={setProjects}
              id={workspace.id}
              isShowModal={modal2.isOpen}
              onCloseModal={modal2.onClose}
            />
            {projects?.map((project) => (
              <AccordionPanel key={project._id} paddingBottom="0">
                <Stack gap="0px">
                  <AssignmentSubItem
                    key={project._id}
                    _id={project._id}
                    name={project.name}
                    workspace={project.workspace}
                    members={[]}
                    board={[]}
                  />
                </Stack>
              </AccordionPanel>
            ))}
          </>
        )}
      </AccordionItem>
      <ShareSpaceModal isShowModal={isOpen} onCloseModal={onClose} />
    </>
  );
};

export default AssignmentItem;
