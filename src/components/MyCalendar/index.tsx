import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import faLocale from "@fullcalendar/core/locales/fa";
import { Box } from "@chakra-ui/react";
import interactionPlugin from "@fullcalendar/interaction";

const events = [{ title: "Meeting", start: new Date() }];

export const MyCalendar = () => {
	return (
		<Box
			height="calc(100vh - 210px)"
			background="#fff"
			marginTop="25px"
			paddingBottom="10px"
		>
			<FullCalendar
				headerToolbar={false}
				direction="rtl"
				aspectRatio={12}
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
// function renderEventContent(events) {
// 	return (
// 		<>
// 			<b>{events.timeText}</b>
// 			<i>{events.event.title}</i>
// 		</>
// 	);
// }
export default MyCalendar;
