import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import faLocale from "@fullcalendar/core/locales/fa";
import { Box, Flex, HStack } from "@chakra-ui/react";
import interactionPlugin from "@fullcalendar/interaction";

import { useEffect, useRef, useState } from "react";
import { Calendar } from "@fullcalendar/core/index.js";
import { RefObject } from "@fullcalendar/core/preact.js";

const events = [{ title: "Meeting", start: new Date() }];

export const MyCalendar = () => {
	const calendarRef = useRef<FullCalendar>(null);
	console.log(calendarRef.current);
	useEffect(() => {
		calendarRef.current?.render();
		console.log(calendarRef.current?.componentDidMount());
	}, []);
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
				ref={calendarRef}
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
export default MyCalendar;
