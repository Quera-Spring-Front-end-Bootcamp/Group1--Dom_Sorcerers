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
                  <Text color="black" fontWeight="500">
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

<<<<<<< HEAD
				<TabPanels>
					<TabPanel
						css={{
							"&::-webkit-scrollbar": {
								height: "6px",
							},
							"&::-webkit-scrollbar-track": {
								width: "7px",
							},
							"&::-webkit-scrollbar-thumb": {
								background: "#eee",
								borderRadius: "24px",
							},
						}}
						height="80vh"
						overflowY="auto"
						px="0"
					>
						<ListBoardView />
						{/* <MyCalendar /> */}
					</TabPanel>
					<TabPanel
						css={{
							"&::-webkit-scrollbar": {
								width: "6px",
							},
							"&::-webkit-scrollbar-track": {
								width: "7px",
							},
							"&::-webkit-scrollbar-thumb": {
								background: "#c1c1c1",
								borderRadius: "24px",
							},
						}}
						height="80vh"
						overflowX="auto"
						pr="0px"
						pl="5px"
						width="100%"
						zIndex="500"
						// width={tabIndex === 1 && "100%"}
					>
						<GridBoardView />
					</TabPanel>
					<TabPanel>
						<MyCalendar />
					</TabPanel>
				</TabPanels>
			</Tabs>
		</Box>
	);
=======
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
        <Button
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
        </Button>
      </Stack>
    </Box>
  );
>>>>>>> 5a17c0544eb0592fd4fe69293648200533d7a551
};

export default Board;
