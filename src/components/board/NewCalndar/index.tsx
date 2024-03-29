import {
  Box,
  Button,
  HStack,
  Input,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Portal,
  Text,
  useEditable,
} from "@chakra-ui/react";
import FullCalendar from "@fullcalendar/react";
import timeGridPlugin from "@fullcalendar/timegrid";
import dayGridPlugin from "@fullcalendar/daygrid";
import listPlugin from "@fullcalendar/list";
import interactionPlugin from "@fullcalendar/interaction";
import faLocale from "@fullcalendar/core/locales/fa";
import { FlagIcon, PlusIcon } from "../../Icons";

import { CloseIcon, PlusSquareIcon } from "@chakra-ui/icons";

import SearchBarInFullCalendar from "../SearchBarInFullCalendar";
import { useEffect, useRef, useState } from "react";

const OriginalCalendar = () => {
  const refCalnedar = useRef<FullCalendar>(null);
  const [yearTitle, setYearTitle] = useState<string | undefined>("");
  const [monthTitle, setMonthTitle] = useState<string | undefined>("");
  useEffect(() => {
    // console.log(refCalnedar);
    setYearTitle(
      refCalnedar?.current?.getApi()?.getDate()?.toLocaleDateString("fa-ir", {
        year: "numeric",
      })
    );
    setMonthTitle(
      refCalnedar?.current?.getApi()?.getDate()?.toLocaleDateString("fa-ir", {
        month: "long",
      })
    );
    // refCalnedar.current?.getApi().prev();
    console.log(
      refCalnedar.current?.getApi().getDate().toLocaleDateString("fa-ir")
    );
    return () => {
      console.log(refCalnedar);
    };
  }, [yearTitle, monthTitle, refCalnedar]);
  const nexMonth = () => {
    refCalnedar.current?.getApi().next();
    setYearTitle(
      refCalnedar?.current?.getApi()?.getDate()?.toLocaleDateString("fa-ir", {
        year: "numeric",
      })
    );
    setMonthTitle(
      refCalnedar?.current?.getApi()?.getDate()?.toLocaleDateString("fa-ir", {
        month: "long",
      })
    );
  };
  const prevMonth = () => {
    refCalnedar.current?.getApi().prev();
    setYearTitle(
      refCalnedar?.current?.getApi()?.getDate()?.toLocaleDateString("fa-ir", {
        year: "numeric",
      })
    );
    setMonthTitle(
      refCalnedar?.current?.getApi()?.getDate()?.toLocaleDateString("fa-ir", {
        month: "long",
      })
    );
  };

  const today = () => {
    refCalnedar.current?.getApi().today();
    setYearTitle(
      refCalnedar?.current?.getApi()?.getDate()?.toLocaleDateString("fa-ir", {
        year: "numeric",
      })
    );
    setMonthTitle(
      refCalnedar?.current?.getApi()?.getDate()?.toLocaleDateString("fa-ir", {
        month: "long",
      })
    );
  };

  return (
    <>
      <SearchBarInFullCalendar
        year={yearTitle}
        month={monthTitle}
        next={nexMonth}
        prev={prevMonth}
        today={today}
      />
      <Box
        height="74vh"
        background="#fff"
        zIndex="9"
        // marginTop="12px"
      >
        <FullCalendar
          dayHeaderClassNames="my-head-table"
          headerToolbar={false}
          ref={refCalnedar}
          contentHeight="700px"
          expandRows={true}
          plugins={[
            dayGridPlugin,
            interactionPlugin,
            timeGridPlugin,
            listPlugin,
          ]}
          locale={faLocale}
          // rerenderDelay={1}
          dayCellContent={(props) => {
            return (
              <>
                <HStack
                  alignItems="end"
                  justifyContent="space-between"
                  flexDirection="row-reverse"
                  minW="100%"
                  paddingBottom="5px"
                  // role="group"
                >
                  <Text fontSize="16px" fontWeight="500" lineHeight="25px">
                    {props.dayNumberText}
                  </Text>
                  <Popover closeOnBlur={true}>
                    {({ isOpen, onClose }) => (
                      <>
                        <PopoverTrigger>
                          <Box
                            // onClick={() => alert("aaaaa")}
                            width="25px"
                            height="25px"
                            style={{
                              // background: "#208D8E",
                              padding: "2px",
                              borderRadius: "5px",
                              cursor: "pointer",
                            }}
                            // display="none"
                            // _hover={{ display: "block" }}
                            // _groupHover={{ display: "block" }}
                          >
                            {/* <PlusIcon color="#fff" /> */}
                            {!isOpen && (
                              <PlusSquareIcon
                                width="25px"
                                height="25px"
                                background="#208D8E"
                                className="addEventIcon"
                                color="white"
                              />
                            )}
                            {isOpen && (
                              <PlusSquareIcon
                                width="25px"
                                height="25px"
                                background="#208D8E"
                                color="white"
                              />
                            )}
                          </Box>
                        </PopoverTrigger>
                        <Portal>
                          <PopoverContent
                            // dir="ltr"
                            padding="20px"
                            border="1px solid #208D8E"
                            width="436px"
                            boxShadow="0px 8px 16px rgba(0, 0, 0, 0.2)"
                          >
                            <HStack justifyContent="space-between">
                              <Box padding="10px">
                                <CloseIcon
                                  fontSize="10px"
                                  onClick={onClose}
                                  // padding="10px"
                                  cursor="pointer"
                                  color="#C8C8C8"
                                />
                              </Box>

                              <Input
                                border="none"
                                outline="none"
                                fontSize="20px"
                                _focusVisible={{
                                  outline: "none",
                                  border: "none",
                                }}
                                _placeholder={{
                                  color: "#c8c8c8",
                                  fontWeight: "500",
                                  fontSize: "20px",
                                  lineHeight: "31px",
                                }}
                                placeholder="نام تسک را وارد کنید"
                              />
                            </HStack>

                            <PopoverBody mt="17px">
                              <HStack justifyContent="space-between">
                                <HStack>
                                  <FlagIcon color="#C1C1C1" size="30" />
                                  <Text
                                    fontSize="20px"
                                    fontWeight="500"
                                    color="primary.600"
                                  >
                                    {props.date.toLocaleDateString("fa-Ir", {
                                      day: "numeric",
                                      month: "long",
                                    })}
                                  </Text>
                                </HStack>
                                <HStack>
                                  <Button
                                    width="125px"
                                    color="#fff"
                                    colorScheme="teal"
                                    bg="primary.600"
                                    fontSize="12px"
                                    fontWeight="500"
                                  >
                                    ساختن تسک جدید
                                  </Button>
                                </HStack>
                              </HStack>
                            </PopoverBody>
                          </PopoverContent>
                        </Portal>
                      </>
                    )}
                  </Popover>
                </HStack>
              </>
            );
          }}
          // dateClick={() => alert("handleDate")}
          eventContent={() => {
            return <Text color="red">event</Text>;
          }}
          events={[{ title: "event 1", date: Date.now() }]}
          dayCellClassNames="quera-cell"
        />
      </Box>
    </>
  );
};

export default OriginalCalendar;
