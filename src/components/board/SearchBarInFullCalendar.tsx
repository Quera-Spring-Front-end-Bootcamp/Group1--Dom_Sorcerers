import { Input, Box, HStack, Divider, Text } from "@chakra-ui/react";
import { MagnifierIcon } from "../Icons";
import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
interface Props {
	year: string | undefined;
	month: string | undefined;
	next: () => void;
	prev: () => void;
	today: () => void;
}
const SearchBarInFullCalendar = ({ year, month, next, prev, today }: Props) => {
	return (
		<Box
			position="sticky"
			zIndex="100000000000"
			top="0"
			bg="#FAFBFC"
			borderTop="1px solid #AAAAAA"
		>
			{/* <Divider borderColor="#AAAAAA" zIndex="0" mt="1px" /> */}

			<HStack py="5px">
				<HStack my="8px" h="25px">
					<MagnifierIcon />
					<Input
						fontSize="12px"
						width="227px"
						border="none"
						type="text"
						placeholder="جستجو بین تسک‌ها"
						padding="0"
						_focusVisible={{ outline: "none", boxShadow: "none" }}
					/>
					<Divider opacity="1" borderColor="#AAAAAA" orientation="vertical" />
				</HStack>

				{/* ********** tag menu *************** */}
				<HStack>
					<Text
						fontSize="12px"
						color="#3D3D3D"
						fontWeight="500"
						onClick={today}
						cursor="pointer"
					>
						امروز
					</Text>
					<HStack gap="20px">
						<ChevronRightIcon color="#7D828C" onClick={prev} cursor="pointer" />
						<ChevronLeftIcon color="#7D828C" onClick={next} cursor="pointer" />
					</HStack>
					<HStack>
						<Text fontSize="12px" fontWeight="500" color="#000">
							{month}
						</Text>
						<Text fontSize="12px" fontWeight="500" color="#000">
							{year}
						</Text>
					</HStack>
				</HStack>
				{/* **************** priority menu ***************** */}
			</HStack>

			<Divider borderColor="#AAAAAA" mb="20px" />
		</Box>
	);
};

export default SearchBarInFullCalendar;
