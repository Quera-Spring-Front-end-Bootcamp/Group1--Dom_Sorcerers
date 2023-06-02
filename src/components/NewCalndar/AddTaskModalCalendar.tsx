import {
	HStack,
	Popover,
	PopoverTrigger,
	Text,
	Portal,
	PopoverContent,
	PopoverCloseButton,
	PopoverHeader,
	PopoverBody,
} from "@chakra-ui/react";

import { PlusIcon } from "../Icons";

const AddTaskModalCalendar = (props: any) => (
	<>
		<HStack
			alignItems="end"
			justifyContent="space-between"
			flexDirection="row-reverse"
			minW="100%"
			paddingBottom="5px"
		>
			<Text fontSize="16px" fontWeight="500" lineHeight="25px">
				{props.dayNumberText}
			</Text>
			<Popover>
				<PopoverTrigger>
					<div
						// onClick={() => alert("aaaaa")}
						className="addEventIcon"
						style={{
							background: "#208D8E",
							padding: "2px",
							borderRadius: "5px",
							cursor: "pointer",
						}}
					>
						<PlusIcon color="#fff" />
					</div>
				</PopoverTrigger>
				<Portal>
					<PopoverContent
						// dir="ltr"
						border="1px solid #208D8E"
						width="436px"
					>
						{/* <PopoverArrow /> */}

						<PopoverCloseButton />
						<PopoverHeader>Confirmation!</PopoverHeader>

						<PopoverBody>
							Are you sure you want to have that milkshake?
						</PopoverBody>
					</PopoverContent>
				</Portal>
			</Popover>
		</HStack>
	</>
);

export default AddTaskModalCalendar;
