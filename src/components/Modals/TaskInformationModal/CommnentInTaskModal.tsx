import { HStack ,Text } from "@chakra-ui/react";
import { CommentIcon } from "../../Icons";

const CommnentInTaskModal = () => {
	return (
		<>
			<HStack
				width="686px"
				borderTop="1px solid #F4F4F4"
				padding="13px 16px 30px"
				justifyContent="space-between"
			>
				<Text color="#AEAEAE" fontSize="16px" fontWeight="400">
					کامنت
				</Text>
				<CommentIcon />
			</HStack>
		</>
	);
};

export default CommnentInTaskModal;
