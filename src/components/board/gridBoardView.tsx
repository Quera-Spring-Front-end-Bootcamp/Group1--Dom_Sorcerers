import {
	Card,
	Divider,
	Flex,
	HStack,
	Spacer,
	Text,
	Stack,
	Box,
	useDisclosure,
} from "@chakra-ui/react";
import FlagIcon from "../Icons/flagIcon";
import TextIcon from "../Icons/textIcon";
import CheckIcon from "../Icons/checkIcon";
import MoreIcon from "../Icons/moreIcon";
import tasksData from "../../data/tasks";
import { PlusIcon, SimplePlusIcon } from "../Icons";
import { TaskInformationModal } from "../Modals/TaskInformationModal/TaskInformationModal";

const GridBoardView = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	return (
		<>
			<HStack
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
				alignItems="flex-start"
				overflowX="auto"
				spacing="20px"
				minWidth="100vw"
				width="200vw"
			>
				{tasksData?.map((task, index) => (
					<Stack key={index}>
						<Card
							boxShadow="0px 2px 8px rgba(0, 0, 0, 0.18)"
							borderRadius="4px"
							borderTop="#F98F2E solid 1px"
							borderTopColor={task.taskCategoryColor}
							width="250px"
							height="41px"
							px="12px"
							mb="12px"
							justifyContent="center"
						>
							<HStack justifyContent="flex-start" alignItems="center">
								<Text>{task.taskCategory}</Text>
								<Text
									px="5px"
									py="10px"
									lineHeight="0px"
									bg="#F4F4F4"
									borderRadius="100px"
								>
									۰
								</Text>
							</HStack>
						</Card>
						{tasksData?.map((task, index) => (
							<Card
								key={index}
								p="12px"
								mb="12px"
								width="250px"
								border="#EFF0F0 solid 1px"
								borderRadius="4px"
								boxShadow="0px 6px 8px rgba(0, 0, 0, 0.14)"
								zIndex="10"
								role="group"
							>
								<Text
									zIndex="0"
									color="#534D60"
									fontSize="10px"
									fontWeight="500"
									mb="8px"
								>
									{task.taskName}
								</Text>
								<HStack mb="20px">
									<Text fontSize="12px" fontWeight="500">
										{task.taskTitle}
									</Text>
									<TextIcon />
								</HStack>
								<HStack mb="15px">
									<FlagIcon />
									<Text fontSize="10px" fontWeight="500">
										{task.taskDeadline}
									</Text>
								</HStack>
								<HStack spacing="12px">
									<Text
										px="4px"
										py="2px"
										bgColor="#BFFDE3"
										borderRadius="10px 0px 0px 10px"
										fontSize="10px"
										fontWeight="500"
									>
										درس
									</Text>
									<Text
										px="4px"
										py="2px"
										bgColor="#EEDFF6"
										borderRadius="10px 0px 0px 10px"
										fontSize="10px"
										fontWeight="500"
									>
										پروژه
									</Text>
								</HStack>
								<Stack
									display="none"
									_groupHover={{
										display: "flex",
										transitionDuration: "700ms",
										transitionTimingFunction: "ease-in-out",
									}}
								>
									<Divider mt="15px" borderColor="#EFF0F0" />
									<Flex mt="15px" direction="row">
										<CheckIcon />
										<Spacer />
										<HStack onClick={onOpen} cursor="pointer">
											<MoreIcon />
										</HStack>
									</Flex>
								</Stack>
							</Card>
						))}
					</Stack>
				))}
				<Card
					boxShadow="0px 2px 8px rgba(0, 0, 0, 0.18)"
					borderRadius="4px"
					// borderTop="#F98F2E solid 1px"
					// borderTopColor={task.taskCategoryColor}
					width="250px"
					height="41px"
					px="12px"
					mb="12px"
					justifyContent="center"
				>
					<HStack width="100%" justifyContent="flex-start" alignItems="center">
						<SimplePlusIcon />
						<Text>ساخت برد جدید</Text>
					</HStack>
				</Card>
			</HStack>
			<TaskInformationModal isOpen={isOpen} onClose={onClose} />
		</>
	);
};

export default GridBoardView;
