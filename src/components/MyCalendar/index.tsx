import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import faLocale from "@fullcalendar/core/locales/fa";
import { Box, Flex, HStack } from "@chakra-ui/react";
import interactionPlugin from "@fullcalendar/interaction";

import { useRef, useState } from "react";
import { Calendar } from "@fullcalendar/core/index.js";

const events = [{ title: "Meeting", start: new Date() }];

export const MyCalendar = () => {
  const calendarRef = useRef<Calendar>(null);

  // const [activeDay, setActiveDay] = useState<string | null>(null);

  // const handleDayCellEnter = (event: Event) => {
  // 	console.log(event);

  // 	const dayNumber = (event.currentTarget as HTMLElement).getAttribute(
  // 		"data-date"
  // 	);
  // 	setActiveDay(dayNumber);
  // };

  // const handleDayCellLeave = () => {
  // 	setActiveDay(null);
  // };
  // const customDayCellContent = (arg: any) => {
  // 	// Extract the day number
  // 	const dayNumber = arg.dayNumberText;

  // 	if (dayNumber === activeDay) {
  // 		return <div className="day-cell active">{dayNumber}</div>;
  // 	}

  // 	return (
  // 		<div className="custom-day-cell">
  // 			<div className="day-number">
  // 				<span>{dayNumber}</span>
  // 				<div className="icon">icon</div>
  // 			</div>
  // 			{/* <div className="icon">icon</div> */}
  // 		</div>
  // 	);

  // 	// Render the day number in a custom position
  // 	// return (
  // 	// 	<div className="custom-day-cell">
  // 	// 		<div className="day-number">{dayNumber}</div>
  // 	// 	</div>
  // 	// );
  // };
  // const customDayCellClassNames = (arg: any) => {
  // 	const { dayNumber } = arg;

  // 	if (dayNumber === activeDay) {
  // 		return "td-cell-calendar active";
  // 	}

  // 	return "td-cell-calendar";
  // };
  return (
    <Box
      height="calc(100vh - 210px)"
      background="#fff"
      marginTop="25px"
      paddingBottom="10px"
    >
      <FullCalendar
        // dayCellClassNames={customDayCellClassNames}
        // dayCellContent={customDayCellContent}
        headerToolbar={false}
        direction="rtl"
        aspectRatio={12}
        eventMouseEnter={() => alert("aaaaaaa")}
        // contentHeight="auto"
        expandRows={false}
        plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        weekends={true}
        events={events}
        // eventContent={renderEventContent}
        height={"100%"}
        locale={faLocale}
        selectable={true}
        editable={true}
        dateClick={(e) => alert(Date.parse(e.dateStr))}
        eventClick={(e) => {
          console.log(e);
        }}
      />
    </Box>
  );
};

// const dayCellContent = (arg: any) => {
// 	return (
// 		<Flex width="100%" height="100%">
// 			<HStack
// 				width="100%"
// 				flexDirection="row-reverse"
// 				justifyContent="space-between"
// 			>
// 				<span>{arg.dayNumberText}</span>
// 				<PlusIcon />
// 			</HStack>
// 		</Flex>
// 	);
// };
// function addIcon() {
// 	return <h5>aaaa</h5>;
// }
// function renderEventContent(events) {
// 	return (
// 		<>
// 			<b>{events.timeText}</b>
// 			<i>{events.event.title}</i>
// 		</>
// 	);
// }
export default MyCalendar;
