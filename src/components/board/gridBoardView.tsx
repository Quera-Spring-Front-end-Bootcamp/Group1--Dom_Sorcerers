import {
  Card,
  Divider,
  Flex,
  HStack,
  Spacer,
  Text,
  Stack,
  Box,
  useDisclosure,
} from "@chakra-ui/react";
import FlagIcon from "../Icons/flagIcon";
import TextIcon from "../Icons/textIcon";
import CheckIcon from "../Icons/checkIcon";
import MoreIcon from "../Icons/moreIcon";
import { TaskInformationModal } from "../Modals/TaskInformationModal/TaskInformationModal";
import { useWorkspace } from "../../context/workspaceContext";

const GridBoardView = () => {
  const workSpaceCtx = useWorkspace();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box
      css={{
        "&::-webkit-scrollbar": {
          height: "6px",
          width: "7px",
        },

        "&::-webkit-scrollbar-thumb": {
          background: "#eee",
          borderRadius: "24px",
        },
      }}
      overflow="auto"
      height="74vh"
      pb="90px"
    >
      <HStack alignItems="flex-start" spacing="20px">
        {workSpaceCtx.boards?.map((board) => (
          <Stack>
            <Card
              key={board._id}
              boxShadow="0px 2px 8px rgba(0, 0, 0, 0.18)"
              borderRadius="4px"
              borderTop="#F98F2E solid 1px"
              // borderTopColor={task.taskCategoryColor}
              width="250px"
              height="41px"
              px="12px"
              mb="12px"
              justifyContent="center"
              role="group"
            >
              <HStack justifyContent="flex-start" alignItems="center">
                <Text>{board.name}</Text>
                <Text
                  px="5px"
                  py="10px"
                  lineHeight="0px"
                  bg="#F4F4F4"
                  borderRadius="100px"
                >
                  ۰
                </Text>
                <Spacer />
                <Box
                  visibility="hidden"
                  _groupHover={{
                    visibility: "visible",
                  }}
                >
                  <MoreIcon />
                </Box>
              </HStack>
            </Card>
            {board.tasks?.map((task) => (
              <Card
                key={task._id}
                p="12px"
                mb="12px"
                width="250px"
                border="#EFF0F0 solid 1px"
                borderRadius="4px"
                boxShadow="0px 6px 8px rgba(0, 0, 0, 0.14)"
                role="group"
              >
                <Text
                  zIndex="0"
                  color="#534D60"
                  fontSize="10px"
                  fontWeight="500"
                  mb="8px"
                >
                  {workSpaceCtx.project?.name}
                </Text>
                <HStack mb="20px">
                  <Text fontSize="12px" fontWeight="500">
                    {task.name}
                  </Text>
                  <TextIcon />
                </HStack>
                <HStack mb="15px">
                  <FlagIcon />
                  <Text fontSize="10px" fontWeight="500">
                    {/* {task.taskDeadline} */}
                  </Text>
                </HStack>
                <HStack spacing="12px">
                  <Text
                    px="4px"
                    py="2px"
                    bgColor="#BFFDE3"
                    borderRadius="10px 0px 0px 10px"
                    fontSize="10px"
                    fontWeight="500"
                  >
                    درس
                  </Text>
                  <Text
                    px="4px"
                    py="2px"
                    bgColor="#EEDFF6"
                    borderRadius="10px 0px 0px 10px"
                    fontSize="10px"
                    fontWeight="500"
                  >
                    پروژه
                  </Text>
                </HStack>
                <Stack
                  visibility="hidden"
                  h="0"
                  _groupHover={{
                    h: "45px",
                    visibility: "visible",
                    transitionDuration: "500ms",
                    transitionTimingFunction: "ease-in-out",
                  }}
                >
                  <Divider mt="15px" borderColor="#EFF0F0" />
                  <Flex mt="15px" direction="row">
                    <CheckIcon />
                    <Spacer />
                    <HStack onClick={onOpen} cursor="pointer">
                      <MoreIcon />
                    </HStack>
                  </Flex>
                </Stack>
              </Card>
            ))}
          </Stack>
        ))}

        <Box as="button" width="250px">
          <Card
            boxShadow="0px 2px 8px rgba(0, 0, 0, 0.18)"
            borderRadius="4px"
            width="250px"
            height="41px"
            px="12px"
            mb="12px"
            justifyContent="center"
          >
            <HStack justifyContent="flex-start" alignItems="center">
              <Text fontSize="14px">ساختن ستون جدید +</Text>
            </HStack>
          </Card>
        </Box>
      </HStack>
      <TaskInformationModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default GridBoardView;
