import {
  HStack,
  Stack,
  Text,
  Box,
  Spacer,
  Accordion,
  AccordionButton,
  AccordionPanel,
  AccordionItem,
  useDisclosure,
} from "@chakra-ui/react";
import { Assigenment } from "../../data/assignment";
import { MoreSpaceModal } from "../Modals/MoreModal/MoreSpaceModal";

export const SideSpaceList = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onOpenModalHandler = () => {
    onOpen();
  };
  const onCloseModalHandler = () => {
    onClose();
  };
  return (
    <>
    <Box
         height="calc(100vh - 420px )"
         overflowY="auto"
         css={{
          "&::-webkit-scrollbar": {
           width: "7px",
          },
          "&::-webkit-scrollbar-track": {
           width: "6px",
          },
          "&::-webkit-scrollbar-thumb": {
           background: "#eee",
           borderRadius: "24px",
          },
         }}
        >
      <Accordion allowToggle>
        <Stack gap="12px">
          {Assigenment.map((item) => (
            <AccordionItem key={item.id} border="none" background="none">
              <AccordionButton
                paddingRight="0"
                paddingTop="6px"
                paddingBottom="6px"
                borderRadius="4px"
                background="none"
                _hover={{ background: "none" }}
                _focusWithin={{ background: "#E9F9FF" }}
              >
                <HStack role="group" width="100%">
                  <HStack>
                    <Box
                      width="20px"
                      height="20px"
                      borderRadius="4px"
                      background={item.color}
                    />
                    <Text fontSize="16px" color="#1E1E1E" fontWeight="500">
                      {item.title}
                    </Text>
                  </HStack>
                  <Spacer />
                  {!item.hasSub && (
                    <Text
                      display="none"
                      _groupHover={{ display: "block" }}
                      onClick={onOpenModalHandler}
                    >
                      ...
                    </Text>
                  )}
                </HStack>
              </AccordionButton>
              {item.hasSub && (
                <AccordionPanel paddingBottom="0">
                  <Stack gap="12px">
                    {item.subAss?.map((subItem) => (
                      <HStack
                        key={subItem.subId}
                        role="group"
                        padding="4px 6px"
                        _hover={{ background: "#E9F9FF" }}
                        _focusWithin={{ background: "#E9F9FF" }}
                        cursor="pointer"
                        borderRadius="4px"
                      >
                        <Box fontSize="16px" fontWeight="500">
                          {subItem.subTtitle}{" "}
                        </Box>
                        <Spacer />
                        <Text
                          display="none"
                          _groupHover={{ display: "block" }}
                          onClick={onOpenModalHandler}
                        >
                          ...
                        </Text>
                      </HStack>
                    ))}
                  </Stack>
                </AccordionPanel>
              )}
            </AccordionItem>
          ))}
        </Stack>
      </Accordion>
      </Box>
      <MoreSpaceModal isShow={isOpen} onCloseModal={onCloseModalHandler} />
    </>
  );
};
