import { HStack, Text, Stack, Button, Textarea } from "@chakra-ui/react";
import { CommentIcon, ShareLinkIcon } from "../../Icons";
import { SmileEmojiIcon } from "../../Icons/SmileEmojiIcon";
import { MyAtSignIcon } from "../../Icons/MyAtSignIcon";
import { DocIcon } from "../../Icons/DocIcon";
import { useState } from "react";

const CommnentInTaskModal = () => {
	const [isSetComment, setIsSetComment] = useState<boolean>(false);
	const showCommnet = () => {
		if (isSetComment) return;
		setIsSetComment(true);
	};
	const closeComment = () => {
		if (!isSetComment) return;
		setIsSetComment(false);
	};
	return (
		<>
			<Stack
				zIndex="100"
				bg={isSetComment ? "#fff" : "transparent"}
				onClick={showCommnet}
				cursor="pointer"
				padding="13px 20px 20px 40px"
				width="686px"
				borderTop="1px solid #F4F4F4"
				borderRadius={isSetComment ? "12px 12px 0px 20px" : "none"}
				justifyContent="space-between"
				// borderBottomEndRadius="20px"
				// bg="red"
				boxShadow={isSetComment ? "0px -4px 12px rgba(0, 0, 0, 0.25)" : "none"}
			>
				<HStack
					// bg="red"
					justifyContent="space-between"
					// height={isSetComment ? "150px" : "inherit"}
					// height="150px"o
					overflow="hidden"
					alignItems="start"
				>
					{isSetComment ? (
						<Textarea
							placeholder="کامنت"
							border="none"
							_focusVisible={{ border: "none", outline: "none" }}
							resize="none"
							rows={5}
							bg="#f2f2f2"
							_placeholder={{
								color: "#AEAEAE",
								fontSize: "16px",
								fontWidth: "400",
							}}
						/>
					) : (
						<Text color="#AEAEAE" fontSize="16px" fontWeight="400">
							کامنت
						</Text>
					)}
					<CommentIcon />
				</HStack>

				<HStack
					onClick={closeComment}
					visibility={isSetComment ? "visible" : "hidden"}
					// display={isSetComment ? "flex" : "none"}
					h={isSetComment ? "100px" : "0"}
					alignItems="end"
					transitionDuration="200ms"
					transitionTimingFunction="ease-in-out"
					justifyContent="space-between"
				>
					{isSetComment && (
						<>
							<HStack gap="20px">
								<MyAtSignIcon />
								<ShareLinkIcon color="#C9CBDA" />
								<DocIcon />
								<SmileEmojiIcon />
							</HStack>
							<Button
								bgColor="primary.600"
								colorScheme="teal"
								color="#fff"
								fontSize="12px"
								fontWeight="600"
								onClick={(e) => {
									e.stopPropagation();
									// alert(123);
								}}
							>
								ثبت کامنت
							</Button>
						</>
					)}
				</HStack>
			</Stack>
		</>
	);
};

export default CommnentInTaskModal;
