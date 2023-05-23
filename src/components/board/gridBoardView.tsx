import {
  Card,
  Divider,
  Flex,
  HStack,
  Spacer,
  Text,
  Stack,
} from "@chakra-ui/react";
import FlagIcon from "../Icons/flagIcon";
import TextIcon from "../Icons/textIcon";
import CheckIcon from "../Icons/checkIcon";
import MoreIcon from "../Icons/moreIcon";
import tasksData from "../../data/tasks";

const GridBoardView = () => {
  return (
    <HStack overflowX="auto" spacing="20px">
      {tasksData.map((task) => (
        <Stack>
          <Card
            boxShadow="0px 2px 8px rgba(0, 0, 0, 0.18)"
            borderRadius="4px"
            borderTop="#F98F2E solid 1px"
            borderTopColor={task.taskCategoryColor}
            width="250px"
            height="41px"
            px="12px"
            mb="12px"
            justifyContent="center"
          >
            <HStack alignItems="center">
              <Text>{task.taskCategory}</Text>
              <Text
                px="5px"
                py="10px"
                lineHeight="0px"
                bg="#F4F4F4"
                borderRadius="100px"
              >
                ۰
              </Text>
            </HStack>
          </Card>
          {tasksData.map((task) => (
            <Card
              transition="0.5s"
              p="12px"
              mb="12px"
              width="250px"
              border="#EFF0F0 solid 1px"
              borderRadius="4px"
              boxShadow="0px 6px 8px rgba(0, 0, 0, 0.14)"
              zIndex="10"
            >
              <Text
                zIndex="0"
                color="#534D60"
                fontSize="10px"
                fontWeight="500"
                mb="8px"
              >
                {task.taskName}
              </Text>
              <HStack mb="20px">
                <Text fontSize="12px" fontWeight="500">
                  {task.taskTitle}
                </Text>
                <TextIcon />
              </HStack>
              <HStack mb="15px">
                <FlagIcon />
                <Text fontSize="10px" fontWeight="500">
                  {task.taskDeadline}
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
              <Divider mt="15px" borderColor="#EFF0F0" />

              <Flex mt="15px" direction="row">
                <CheckIcon />
                <Spacer />
                <MoreIcon />
              </Flex>
            </Card>
          ))}
        </Stack>
      ))}
    </HStack>
  );
};

export default GridBoardView;
