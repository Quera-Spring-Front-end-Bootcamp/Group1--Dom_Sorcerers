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
} from "@chakra-ui/react";
import TextIcon from "../Icons/textIcon";
import FlagIcon from "../Icons/flagIcon";

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

const ListBoardView = () => {
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
        پروژه اول
      </Text>
      {tasksData.map((taskData, index) => (
        <Accordion key={index} allowToggle>
          <AccordionItem mb="30px" border="none">
            <h2>
              <AccordionButton
                textAlign="right"
                _hover={{ bgColor: "transparent" }}
              >
                <HStack textAlign="right" flex="3">
                  <AccordionIcon />
                  <Box
                    as="span"
                    textAlign="right"
                    bgColor={taskData.categoryColor}
                    p="5px"
                    mx="10px"
                    borderRadius="5px"
                    fontWeight="500"
                    color="white"
                  >
                    {taskData.category}
                  </Box>
                  <Box as="span" flex="2" textAlign="right" fontSize="12px">
                    ۲ تسک
                  </Box>
                </HStack>
                <Box as="span" flex="1" fontWeight="500">
                  اعضا
                </Box>
                <Box as="span" flex="1" fontWeight="500">
                  ددلاین
                </Box>
                <Box as="span" flex="1" fontWeight="500">
                  اولویت
                </Box>
                <Box as="span" flex="1" fontWeight="500">
                  توضیحات
                </Box>
              </AccordionButton>
            </h2>

            {taskData.tasks.map((task, index) => (
              <AccordionPanel key={index} pb={4}>
                <HStack
                  justifyContent="center"
                  py="15px"
                  bgColor="white"
                  borderRadius="4px"
                  spacing="0"
                >
                  <HStack textAlign="right" flex="3">
                    <Square
                      size="16px"
                      bgColor={taskData.categoryColor}
                      ml="5px"
                      mr="32px"
                      borderRadius="3px"
                    />
                    <Box as="span" textAlign="right" fontSize="12px">
                      {task.title}
                    </Box>
                  </HStack>
                  <Box as="span" flex="1" fontWeight="500" fontSize="12px">
                    اعضا
                  </Box>
                  <Box as="span" flex="1" fontWeight="500" fontSize="12px">
                    {task.deadline}
                  </Box>
                  <Box as="span" flex="1" fontWeight="500" fontSize="12px">
                    {task.priority ? <FlagIcon /> : null}
                  </Box>
                  <Box as="span" flex="1" fontWeight="500" fontSize="12px">
                    <TextIcon />
                  </Box>
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
