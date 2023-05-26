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
} from "@chakra-ui/react";
import {
	ArrowLeftIcon,
	CLoseIcon,
	CheckBoxButtonIcon,
	DotsIcon,
	FlagIcon,
	PlusIcon,
	UserIcon,
} from "../../Icons";
import ShareIcon from "../../Icons/shareIcon";
import { BookmarkIcon } from "../../Icons/BookmarkIcon";
interface Props {
	isOpen: boolean;
	onClose: () => void;
}
export const TaskInformationModal = ({ isOpen, onClose }: Props) => {
	// const { isOpen, onOpen, onClose } = useDisclosure();
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
					maxWidth="1352px"
					height="596px"
					padding="28px 20px"
					borderRadius="20px"
				>
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

					<ModalBody marginTop="15px">
						<Stack>
							<HStack gap="0px">
								<Box width="50%">
									<HStack gap="27px">
										<HStack gap="1px">
											<Button
												bg="#F84747"
												borderRadius="none"
												width="111px"
												fontSize="12px"
												height="30px"
												color="white"
												fontWeight="500"
												fontStyle="normal"
												_hover={{ background: "#F84747" }}
											>
												Open
											</Button>
											<HStack
												bg="#F84747"
												width="25px"
												padding="0"
												fontSize="12px"
												height="30px"
												color="white"
												fontWeight="500"
												_hover={{ background: "#F84747" }}
												borderRadius="3px 0px 0px 3px"
												margin="0 !important"
												justifyContent="center"
												cursor="pointer"
											>
												<ArrowLeftIcon />
											</HStack>
										</HStack>
										<HStack flexGrow="1" gap="27px">
											<CheckBoxButtonIcon />
											<AvatarGroup size="sm" max={2}>
												<Avatar
													width="35px"
													height="35px"
													name="Ryan Florence"
													src="https://bit.ly/ryan-florence"
												/>
												<Avatar
													border="1px dashed #C1C1C1"
													bg="transparent"
													width="35px"
													height="35px"
													icon={<UserIcon />}
													// src="https://bit.ly/code-beast"
												/>
											</AvatarGroup>
											<Flex
												border="1px dashed #FB0606"
												bg="transparent"
												borderRadius="50%"
												width="35px"
												height="35px"
												justifyContent="center"
												alignItems="center"
											>
												<FlagIcon />
											</Flex>
										</HStack>
										<HStack paddingLeft="10px" gap="24px">
											<HStack>
												<ShareIcon color="#BDBDBD" />
												<Text fontSize="16px" fontWeight="500" color="#1E1E1E">
													اشتراک گذاری
												</Text>
											</HStack>
											<DotsIcon />
										</HStack>
									</HStack>
									<Divider marginTop="37px" />

									<Stack marginTop="25px" gap="15px">
										<Flex
											border="1px dashed #C1C1C1"
											bg="transparent"
											borderRadius="50%"
											width="35px"
											height="35px"
											justifyContent="center"
											alignItems="center"
										>
											<BookmarkIcon />
										</Flex>
										<Text
											as="h1"
											fontSize="24px"
											fontWeight="600"
											color="#1E1E1E"
										>
											عنوان تسک
										</Text>
										<Text
											fontWeight="400"
											fontSize="14px"
											lineHeight="24px"
											width="593px"
											padding="10px"
											border="1px solid #C1C1C1"
											borderRadius="10px"
										>
											لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
											و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
											روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
											شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف
											بهبود ابزارهای کاربردی می باشد،
										</Text>
										<Stack marginTop="" gap="15px">
											<HStack cursor="pointer">
												<PlusIcon color="#208D8E" />
												<Text color="#208D8E" fontSize="12px" fontWeight="500">
													اضافه کردن چک لیست
												</Text>
											</HStack>
											<HStack cursor="pointer">
												<PlusIcon color="#208D8E" />
												<Text color="#208D8E" fontSize="12px" fontWeight="500">
													اضافه کردن پیوست
												</Text>
											</HStack>
										</Stack>
									</Stack>
								</Box>
								<Box
									width="50%"
									// bg="red"
									borderRight="1px solid #F4F4F4"
									height="400px"
									margin="0 !important"
								></Box>
							</HStack>
						</Stack>
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
