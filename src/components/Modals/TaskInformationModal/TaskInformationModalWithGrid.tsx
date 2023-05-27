import {
	Button,
	HStack,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	useDisclosure,
	Text,
	Box,
	Divider,
	AvatarGroup,
	Avatar,
	Flex,
	Stack,
	Grid,
	GridItem,
} from "@chakra-ui/react";
import {
	ArrowLeftIcon,
	CLoseIcon,
	CheckBoxButtonIcon,
	DotsIcon,
	FlagIcon,
	PlayTimeIcon,
	PlusIcon,
	UserIcon,
} from "../../Icons";
import ShareIcon from "../../Icons/shareIcon";
import { BookmarkIcon } from "../../Icons/BookmarkIcon";
import { EyeICon } from "../../Icons/EyeICon";
interface Props {
	isOpen: boolean;
	onClose: () => void;
}
export const TaskInformationModalWithGrid = ({ isOpen, onClose }: Props) => {
	// const { isOpen, onOpen, onClose } = useDisclosure();
	const getLocaleDateAndMonth = () => {
		const time = new Date();
		const year = time.toLocaleDateString("fa-IR", {
			year: "numeric",
		});
		const month = time.toLocaleDateString("fa-IR", {
			month: "long",
		});
		return `${month}${year}`;
	};
	return (
		<>
			{/* <Button onClick={onOpen}>Open Modal</Button> */}

			<Modal
				isOpen={isOpen}
				onClose={onClose}
				isCentered
				size="6xl"
				// size={{}}
				motionPreset="slideInBottom"

				// variant="Modal"
			>
				<ModalOverlay />
				<ModalContent
					position="relative"
					maxWidth="1352px"
					height="596px"
					padding="28px 20px"
					borderRadius="20px"
				>
					{/* <Divider
						orientation="vertical"
						position="absolute"
						style={{
							right: "calc(50% - 10px)",
						}}
						height="520px"
					/> */}
					<ModalHeader display="flex">
						<HStack
							cursor="pointer"
							as="div"
							alignItems="center"
							justifyContent="center"
							width="20px"
							height="20px"
							onClick={onClose}
							// bg="red"
						>
							<CLoseIcon color="#BDBDBD" />
						</HStack>
					</ModalHeader>

					<ModalBody>
						<Grid
							templateColumns="repeat(2, 1fr)"
							templateRows="repeat(2,1fr)"
							gap={0}
						>
							<GridItem w="100%" h="10" bg="blue.500" />
							<GridItem
								w="100%"
								h="10"
								bg="blue.500"
								borderRight="1px solid #c1c1c1"
							/>
							<GridItem w="100%" h="10" bg="blue.500" />
							<GridItem
								w="100%"
								h="10"
								bg="blue.500"
								borderRight="1px solid #c1c1c1"
							/>
						</Grid>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3} onClick={onClose}>
							Close
						</Button>
						<Button variant="ghost">Secondary Action</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
