import {
  HStack,
  Stack,
  Text,
  Box,
  Spacer,
  Flex,
  Divider,
  Input,
} from "@chakra-ui/react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import ListIcon from "../Icons/listIcon";
import GridIcon from "../Icons/gridIcon";
import CalenderIcon from "../Icons/calendarIcon";
import ShareIcon from "../Icons/shareIcon";
import { MagnifierIcon } from "../Icons";
import FilterIcon from "../Icons/filterIcon";
import ListBoard from "./listBoard";

const Board = () => {
  return (
    <Box width="75%" height="100vh" py="40px" px="30px">
      <Tabs colorScheme="primary" zIndex="2">
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
            <Tab px="0" pr="20px" py="20px">
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

            <HStack justifyContent="center" alignItems="center">
              <ShareIcon />
              <Text fontWeight="500">اشتراک‌گذاری</Text>
            </HStack>
          </Flex>
        </TabList>

        <Divider borderColor="#AAAAAA" zIndex="0" mt="1px" />

        <HStack py="10px">
          <HStack my="15px" h="25px">
            <MagnifierIcon />
            <Input
              fontSize="13px"
              width="225px"
              border="none"
              type="text"
              placeholder="جستجو بین تسک‌ها"
              padding="0"
              _focusVisible={{ outline: "none", boxShadow: "none" }}
            />

            <Divider opacity="1" borderColor="#AAAAAA" orientation="vertical" />
          </HStack>

          <HStack justifyContent="center" alignItems="center" pr="20px">
            <FilterIcon />
            <Text fontSize="13px" fontWeight="500">
              فیلترها
            </Text>
          </HStack>
        </HStack>

        <Divider borderColor="#AAAAAA" />

        <TabPanels>
          <TabPanel>
            <ListBoard />
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Board;
