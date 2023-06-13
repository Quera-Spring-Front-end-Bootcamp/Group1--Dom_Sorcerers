import {
  Accordion,
  AccordionButton,
  AccordionItem,
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
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import {
  ColorPalletIcon,
  EditIcon,
  ShareButtonIcon,
  ShareLinkIcon,
  SimplePlusIcon,
  TrashIcon,
} from "../../components/Icons";
import { ShareProjectModal } from "../../components/Modals/ShareModal/ShareProjectModal";
import { useWorkspace } from "../../context/workspaceContext";
import projectApi from "../../api/project";

const modalData = [
  { id: 1, title: "ساختن پروژه جدید", icon: SimplePlusIcon },
  { id: 2, title: "ویرایش نام ورک‌اسپیس", icon: EditIcon },
  { id: 3, title: "ویرایش رنگ", icon: ColorPalletIcon },
  { id: 4, title: "کپی لینک", icon: ShareLinkIcon },
  { id: 5, title: "حذف", icon: TrashIcon },
];
interface projectType {
  id: string;
  name: string;
}
export const AssignmentSubItem = (project: projectType) => {
  const [isShowDots, setIsShowDots] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const workSpaceCtx = useWorkspace();
  //   const [project, setProject] = useState<projectType>({
  //     id: "",
  //     name: "",
  //     workspace: "",
  //     members: [],
  //     board: [],
  //   });

  //   const fetchProject = async () => {
  //     const response = await projectApi.getProjectById(proj.id);
  //     setProject(response.data.data);
  //   };

  const onClickProject = () => {
    workSpaceCtx.setCurrentProjectId(project.id);
    console.log(project.name);
    //fetchProject();
  };
  return (
    <>
      <Accordion allowToggle>
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
                <HStack
                  width="100%"
                  key={project.id}
                  role="group"
                  padding="4px 6px"
                  // background={id === String(item.id) ? "#E9F9FF" : "none"}
                  // _hover={{ background: "#E9F9FF" }}
                  // _focusWithin={{ background: "#E9F9FF" }}
                  cursor="pointer"
                  borderRadius="4px"
                  justifyContent="space-between"
                  // onMouseMove={() => setIsShowDots(true)}
                  // onMouseOut={() => setIsShowDots(false)}
                >
                  <Box
                    fontSize="16px"
                    fontWeight="500"
                    onClick={onClickProject}
                  >
                    {project.name}
                  </Box>
                  <Spacer />
                  <>
                    <Menu>
                      {isShowDots && (
                        <MenuButton
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
                            <Text
                              fontSize="14px"
                              fontWeight="400"
                              color="#1E1E1E"
                            >
                              ساختن تسک جدید
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
                              ویرایش نام پروژه
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
                  </>
                </HStack>
              </AccordionButton>
            </>
          )}
        </AccordionItem>
      </Accordion>
      <ShareProjectModal isShowModal={isOpen} onCloseModal={onClose} />
    </>
  );
};
