import { useState } from "react";
import {
  HStack,
  Stack,
  Text,
  Box,
  Spacer,
  Flex,
  Button,
} from "@chakra-ui/react";
import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useDisclosure,
} from "@chakra-ui/react";

import ListIcon from "../Icons/listIcon";
import GridIcon from "../Icons/gridIcon";
import CalenderIcon from "../Icons/calendarIcon";
import ShareIcon from "../Icons/shareIcon";

import GridBoardView from "./gridBoardView";
import ListBoardView from "./listBoardView";
import MyCalendar from "../MyCalendar";
import SearchBar from "./searchBar";
import { ShareProjectModal } from "../Modals/ShareModal/ShareProjectModal";
import AddIcon from "../Icons/addIcon";
import { NewTaskBtn } from "../Modals/NewTask/NewTaskBtn";

const Board = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const handleTabsChange = (index: number) => {
    setTabIndex(index);
    // console.log(tabIndex);
  };

  const { isOpen, onOpen, onClose } = useDisclosure();
  const onOpenShareModalHandler = () => {
    onOpen();
  };
  const onCloseShareModalHandler = () => {
    onClose();
  };
  return (
    <Box width="calc(100% - 350px)" pt="40px" pr="10px" pl="30px">
      <Stack justifyItems="flex-start">
        <Tabs colorScheme="primary" zIndex="2" onChange={handleTabsChange}>
          <TabList border="0px">
            <Flex width="100%" flexDirection="row">
              <Stack justifyContent="center">
                <Text
                  fontSize="20px"
                  fontWeight="600"
                  borderLeft="#999999 solid 1px"
                  paddingLeft="20px"
                  lineHeight="22px"
                >
                  پروژه اول
                </Text>
              </Stack>

              <Tab padding="0" pr="20px">
                <ListIcon />
                <Text
                  fontSize="16px"
                  fontWeight="500"
                  borderLeft="#999999 solid 1px"
                  pr="8px"
                  pl="20px"
                >
                  نمایش لیستی
                </Text>
              </Tab>

              <Tab padding="0" pr="20px">
                <GridIcon />
                <Text
                  fontSize="16px"
                  fontWeight="500"
                  borderLeft="#999999 solid 1px"
                  pr="8px"
                  pl="20px"
                >
                  نمایش ستونی
                </Text>
              </Tab>
              <Tab px="0" pr="20px" py="15px">
                <CalenderIcon />
                <Text
                  fontSize="16px"
                  fontWeight="500"
                  borderLeft="#999999 solid 1px"
                  pr="8px"
                  pl="20px"
                >
                  تقویم
                </Text>
              </Tab>

              <Spacer />

              <HStack
                onClick={onOpenShareModalHandler}
                justifyContent="center"
                alignItems="center"
              >
                <Button colorScheme="transparent" padding="0px" m="0px">
                  <ShareIcon />
                  <Text pr="5px" color="black" fontWeight="500">
                    اشتراک‌گذاری
                  </Text>
                </Button>
              </HStack>

              <ShareProjectModal
                isShowModal={isOpen}
                onCloseModal={onCloseShareModalHandler}
              />
            </Flex>
          </TabList>

          <TabPanels>
            <TabPanel px="0" py="0">
              <SearchBar />
              <ListBoardView />
            </TabPanel>
            <TabPanel px="0" py="0">
              <SearchBar />
              <GridBoardView />
            </TabPanel>
            <TabPanel overflowY="auto" px="0" py="0">
              <SearchBar />
              {tabIndex === 2 && <MyCalendar />}
            </TabPanel>
          </TabPanels>
        </Tabs>
        {/* <Button
          colorScheme="primary"
          backgroundColor="primary.600"
          position="fixed"
          left="50px"
          bottom="30px"
          leftIcon={<AddIcon />}
          zIndex="50"
          fontSize="14px"
        >
          تسک جدید
        </Button> */}
        <Box position="fixed" left="50px" bottom="30px" zIndex="50">
          <NewTaskBtn />
        </Box>
      </Stack>
    </Box>
  );
};

export default Board;
