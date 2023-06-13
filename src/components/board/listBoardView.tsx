import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Text,
  HStack,
  Square,
  Flex,
} from "@chakra-ui/react";
import TextIcon from "../Icons/textIcon";
import { useState, useEffect } from "react";
import boardApi from "../../api/board";
import { useWorkspace } from "../../context/workspaceContext";

const tasksData = [
  {
    category: "Pending",
    categoryColor: "#F92E8F",
    tasks: [
      {
        members: ["src", "src1"],
        deadline: "۶ آبان",
        priority: "true",
        title: "این یک تیتر برای این تسک است.",
      },
      {
        members: ["src", "src1"],
        deadline: "۷ آبان",
        priority: "true",
        title: "این یک تیتر برای این تسک است.",
      },
    ],
  },

  {
    category: "In Progress",
    categoryColor: "#F98F2E",
    tasks: [],
  },
  {
    category: "Done",
    categoryColor: "#43BB0B",
    tasks: [
      {
        members: ["src", "src1"],
        deadline: "۶ آبان",
        priority: "true",
        title: "این یک تیتر برای این تسک است.",
      },
      {
        members: ["src", "src1"],
        deadline: "۶ آبان",
        priority: "true",
        title: "این یک تیتر برای این تسک است.",
      },
      {
        members: ["src", "src1"],
        deadline: "۶ آبان",
        priority: "true",
        title: "این یک تیتر برای این تسک است.",
      },
    ],
  },
];

type boardsType = {
  _id: string;
  name: string;
  position: number;
  project: string;
  tasks: taskType;
}[];

type taskType = {
  _id: string;
  name: string;
  description: string;
  label: [];
  board: string;
  taskTags: [];
  taskAssigns: [];
  comments: [];
  position: 1;
}[];

const ListBoardView = () => {
  const [boards, setBoards] = useState<boardsType | null>();
  const [projectId, setProjectId] = useState("");
  const workspaceCtx = useWorkspace();
  const fetchBoards = async () => {
    // console.log("projectId");
    // console.log(workspaceCtx.projectId);
    if (workspaceCtx.project) {
      const response = await boardApi.getAllProjectBoards(
        workspaceCtx.project._id
      );
      setBoards(response.data.data);
      workspaceCtx.setCurrentBoards(response.data.data);
    }
  };
  useEffect(() => {
    if (workspaceCtx.project) setProjectId(workspaceCtx.project._id);
    //console.log("projectId");
    //  console.log(workspaceCtx.project._id);
  });

  useEffect(() => {
    if (workspaceCtx.project && workspaceCtx.project._id) fetchBoards();
  }, [projectId]);

  return (
    <Box
      css={{
        "&::-webkit-scrollbar": {
          width: "6px",
        },
        "&::-webkit-scrollbar-track": {
          width: "7px",
        },
        "&::-webkit-scrollbar-thumb": {
          background: "#eee",
          borderRadius: "24px",
        },
      }}
      height="74vh"
      overflowY="auto"
    >
      <Text fontWeight="600" fontSize="20px" pb="15px">
        {workspaceCtx.project?.name}
      </Text>
      {boards?.map((board, index) => (
        <Accordion key={index} allowToggle>
          <AccordionItem mb="30px" border="none">
            <h2>
              <AccordionButton
                textAlign="right"
                _hover={{ bgColor: "transparent" }}
              >
                <HStack textAlign="right" flex="2.5">
                  <AccordionIcon />
                  <Box
                    as="span"
                    textAlign="right"
                    //  bgColor={taskData.categoryColor}
                    bgColor="#F92E8F"
                    p="5px"
                    mx="10px"
                    borderRadius="5px"
                    fontWeight="500"
                    color="white"
                  >
                    {board.name}
                  </Box>
                  <Box as="span" flex="2" textAlign="right" fontSize="12px">
                    {board.tasks.length} تسک
                  </Box>
                </HStack>
                <Flex
                  justifyContent="center"
                  as="span"
                  flex="1"
                  fontWeight="500"
                >
                  اعضا
                </Flex>
                <Flex
                  justifyContent="center"
                  as="span"
                  flex="1"
                  fontWeight="500"
                >
                  ددلاین
                </Flex>
                <Flex
                  justifyContent="center"
                  as="span"
                  flex="1"
                  fontWeight="500"
                >
                  اولویت
                </Flex>
                <Flex
                  justifyContent="center"
                  as="span"
                  flex="1"
                  fontWeight="500"
                >
                  توضیحات
                </Flex>
              </AccordionButton>
            </h2>

            {board.tasks.map((task, index) => (
              <AccordionPanel key={index} pb={4}>
                <HStack
                  justifyContent="center"
                  py="15px"
                  bgColor="white"
                  borderRadius="4px"
                  spacing="0"
                >
                  <HStack textAlign="right" flex="2.5">
                    <Square
                      size="16px"
                      // bgColor={taskData.categoryColor}
                      bgColor="#F92E8F"
                      ml="5px"
                      mr="32px"
                      borderRadius="3px"
                    />
                    <Box as="span" textAlign="right" fontSize="12px">
                      {task.name}
                    </Box>
                  </HStack>
                  <Flex
                    justifyContent="center"
                    as="span"
                    flex="1"
                    fontWeight="500"
                    fontSize="12px"
                    pr="14px"
                  >
                    {/* {task.members.map((_, index) => (
                      <Avatar
                        key={index}
                        mr="-14px"
                        width="26px"
                        height="26px"
                      />
                    ))} */}
                  </Flex>
                  <Flex
                    justifyContent="center"
                    as="span"
                    flex="1"
                    fontWeight="500"
                    fontSize="12px"
                  >
                    {/* {task.deadline} */}
                  </Flex>
                  <Flex
                    justifyContent="center"
                    as="span"
                    flex="1"
                    fontWeight="500"
                    fontSize="12px"
                  >
                    {/* {task.priority ? <FlagIcon color="red" /> : null} */}
                  </Flex>
                  <Flex
                    justifyContent="center"
                    as="span"
                    flex="1"
                    fontWeight="500"
                    fontSize="12px"
                  >
                    <TextIcon />
                  </Flex>
                </HStack>
              </AccordionPanel>
            ))}
          </AccordionItem>
        </Accordion>
      ))}
    </Box>
  );
};

export default ListBoardView;
