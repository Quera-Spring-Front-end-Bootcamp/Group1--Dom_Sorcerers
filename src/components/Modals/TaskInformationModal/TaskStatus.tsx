import { Box, HStack, Text } from "@chakra-ui/react";
interface Props {
	status: TaskStatusEnum;
}
export enum TaskStatusEnum {
	Inprogress = "INPROGRES",
	Pending = "PENDING",
	Done = "DONE",
}
export const TaskStatus = ({ status }: Props) => {
	switch (status) {
		case "INPROGRES":
			return (
				<HStack>
					<Text>Inprogress</Text>
					<Box width="12px" height="12px" bg="#EC612E" margin="0" />
				</HStack>
			);
		case "PENDING":
			return (
				<HStack>
					<Text>Pending</Text>
					<Box width="12px" height="12px" bg="#F7CE46" margin="0" />
				</HStack>
			);
	}
	return (
		<HStack>
			<Text>Done</Text>
			<Box width="12px" height="12px" bg="#0EBB34" margin="0" />
		</HStack>
	);
};
