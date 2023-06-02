import {
	Button,
	HStack,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
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
	PlayTimeIcon,
	PlusIcon,
	UserIcon,
} from "../../Icons";
import ShareIcon from "../../Icons/shareIcon";

import { BookmarkIcon } from "../../Icons/BookmarkIcon";
import { EyeICon } from "../../Icons/EyeICon";
import { TaskStatus, TaskStatusEnum } from "./TaskStatus";
import CommnentInTaskModal from "./CommnentInTaskModal";
interface Props {
	isOpen: boolean;
	onClose: () => void;
}
export const TaskInformationModal = ({ isOpen, onClose }: Props) => {
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
					padding="28px 20px 0px 20px"
					borderRadius="20px"
				>
					<Divider
						orientation="vertical"
						position="absolute"
						bottom="0"
						style={{
							right: "calc(50% - 10px)",
						}}
						height="540px"
					/>
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
						<Stack>
							<HStack borderBottom="1px solid #F4F4F4" paddingBottom="20px">
								<HStack flex="1">
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
										<HStack gap="2px">
											<ShareIcon color="#BDBDBD" />
											<Text fontSize="16px" fontWeight="500" color="#1E1E1E">
												اشتراک گذاری
											</Text>
										</HStack>
										<DotsIcon />
									</HStack>
								</HStack>
								<HStack
									flex="1"
									paddingRight="20px"
									justifyContent="space-between"
								>
									<HStack>
										<HStack>
											<Stack
												alignItems="flex-start"
												gap="5px"
												padding="5px 10px 0px 28px"
												borderLeft="1px solid #F4F4F4"
											>
												<Text fontWeight="500" fontSize="12px" color="#bbb">
													ساخته شده در
												</Text>

												<Text
													fontWeight="500"
													fontSize="16px"
													color="#1E1E1E"
													marginTop="0"
												>
													{getLocaleDateAndMonth()}
												</Text>
											</Stack>
											<Stack
												alignItems="flex-start"
												gap="5px"
												padding="5px 28px 0px 27px"
												borderLeft="1px solid #F4F4F4"
											>
												<Text fontWeight="500" fontSize="12px" color="#bbb">
													زمان
												</Text>

												<HStack>
													<PlayTimeIcon />
													<Text
														marginRight="2px"
														fontWeight="500"
														fontSize="16px"
														color="#1E1E1E"
														marginTop="0"
													>
														00:00:00
													</Text>
												</HStack>
											</Stack>
											<Stack
												alignItems="flex-start"
												gap="5px"
												padding="5px 28px 0px 28px"
												// borderLeft="1px solid #F4F4F4"
											>
												<Text fontWeight="500" fontSize="12px" color="#bbb">
													ددلاین
												</Text>

												<Text
													fontWeight="500"
													fontSize="16px"
													color="#1E1E1E"
													marginTop="0"
												>
													پس فردا
												</Text>
											</Stack>
										</HStack>
									</HStack>
									<Box
										position="relative"
										_after={{
											position: "absolute",
											fontSize: "12px",
											fontWeight: "500",
											content: `"${(2).toLocaleString("fa-IR")}"`,
											width: "17px",
											height: "17px",
											bg: "#4AB7D8",
											top: "-15px",
											right: "-7px",
											display: "flex",
											justifyContent: "center",
											alignItems: "center",
											borderRadius: "50%",
											padding: "2px",
										}}
									>
										<EyeICon />
									</Box>
								</HStack>
							</HStack>
							<HStack alignItems="start">
								<HStack flex="1">
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
								</HStack>

								<HStack flex="1">
									<Stack marginTop="14px" width="100%" gap="14px">
										<HStack justifyContent="space-between">
											<HStack>
												<Text
													fontSize="16px"
													fontWeight="600"
													color="primary.600"
												>
													شما
												</Text>
												<Text
													fontSize="16px"
													fontWeight="400"
													color="#000"
													// marginRight="0"
												>
													این تسک را ساختید
												</Text>
											</HStack>
											<Text fontSize="12px" fontWeight="400" color="#ACAEB0">
												{(1).toLocaleString("fa-IR")} ساعت پیش
											</Text>
										</HStack>
										<HStack justifyContent="space-between">
											<HStack>
												<Text
													fontSize="16px"
													fontWeight="600"
													color="primary.600"
												>
													شما
												</Text>
												<Text
													fontSize="16px"
													fontWeight="400"
													color="#000"
													// marginRight="0"
												>
													این تسک را از
												</Text>
												<TaskStatus status={TaskStatusEnum.Inprogress} />
												<Text
													fontSize="16px"
													fontWeight="400"
													color="#000"
													// marginRight="0"
												>
													به
												</Text>
												<TaskStatus status={TaskStatusEnum.Done} />
												<Text
													fontSize="16px"
													fontWeight="400"
													color="#000"
													// marginRight="0"
												>
													منتقل کردید
												</Text>
											</HStack>
											<Text fontSize="12px" fontWeight="400" color="#ACAEB0">
												{(1).toLocaleString("fa-IR")} ساعت پیش
											</Text>
										</HStack>
										<HStack justifyContent="space-between">
											<HStack>
												<Text
													fontSize="16px"
													fontWeight="600"
													color="primary.600"
												>
													شما
												</Text>
												<Text
													fontSize="16px"
													fontWeight="400"
													color="#000"
													// marginRight="0"
												>
													این تسک را از
												</Text>
												<TaskStatus status={TaskStatusEnum.Done} />
												<Text
													fontSize="16px"
													fontWeight="400"
													color="#000"
													// marginRight="0"
												>
													به
												</Text>
												<TaskStatus status={TaskStatusEnum.Pending} />
												<Text
													fontSize="16px"
													fontWeight="400"
													color="#000"
													// marginRight="0"
												>
													منتقل کردید
												</Text>
											</HStack>
											<Text fontSize="12px" fontWeight="400" color="#ACAEB0">
												{(1).toLocaleString("fa-IR")} ساعت پیش
											</Text>
										</HStack>
										{/*start comment */}
										<HStack alignItems="flex-start" marginTop="12px !important">
											<Avatar
												width="35px"
												height="35px"
												name="Dan Abrahmov"
												src="https://bit.ly/dan-abramov"
											/>
											<Stack
												border="1px solid #F4F4F4"
												borderRadius="12px"
												padding="20px"
											>
												<HStack justifyContent="space-between">
													<HStack>
														<Text
															fontSize="16px"
															fontWeight="600"
															color="primary.600"
														>
															شما
														</Text>
														<Text
															fontSize="12px"
															fontWeight="400"
															color="#AAAAAA"
															// marginRight="0"
														>
															کامنت گذاشتید
														</Text>
													</HStack>
													<Text
														fontSize="12px"
														fontWeight="400"
														color="#AAAAAA"
													>
														{(12).toLocaleString("fa-IR")} تیر
													</Text>
												</HStack>
												<HStack>
													<Text
														fontSize="12px"
														fontWeight="400"
														fontStyle="normal"
														lineHeight="18px"
														color="#000"
													>
														لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از
														صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها
														و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که
														لازم است.
													</Text>
												</HStack>
											</Stack>
										</HStack>
										{/* end comment */}
									</Stack>
								</HStack>
							</HStack>
						</Stack>
					</ModalBody>

					<ModalFooter padding="0" position="absolute" bottom="0" left="0">
						<CommnentInTaskModal />
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
};
