import {
  Avatar,
  Box,
  HStack,
  Spacer,
  Square,
  VStack,
  Text,
} from "@chakra-ui/react";

type ConfirmFormProps = {
  spaceName: string;
  color: string;
};

export function ConfirmForm({ spaceName, color }: ConfirmFormProps) {
  return (
    <VStack align="right" width="100%" gap="10px">
      <Text
        width="100%"
        textAlign="center"
        fontSize="20px"
        fontWeight="500"
        color="#000"
      >
        مرور اطلاعات
      </Text>
      <Box
        border="1px solid"
        borderColor="#AAAAAA"
        borderRadius="8px"
        height="158px"
        padding="10px"
      >
        <VStack alignItems="stretch" gap="15px">
          <HStack>
            <Text>نام ورک‌اسپیس</Text>
            <Spacer />
            <Text>{spaceName} </Text>
          </HStack>
          <HStack>
            <Text>رنگ ورک‌اسپیس</Text>
            <Spacer />
            <Square size="16px" bg={color} borderRadius="5px" />
          </HStack>
          <HStack>
            <Text>اعضا</Text>
            <Spacer />
            <Avatar
              width="35px"
              height="35px"
              src="https://bit.ly/broken-link"
            />
          </HStack>
        </VStack>
      </Box>
    </VStack>
  );
}
