import { VStack, Text, Input } from "@chakra-ui/react";

type UserData = {
  spaceName: string;
};

type NameFormProps = UserData & {
  updateFields: (fields: Partial<UserData>) => void;
};

export function NameForm({ spaceName, updateFields }: NameFormProps) {
  return (
    <VStack align="right" width="100%" gap="10px">
      <Text
        width="100%"
        textAlign="center"
        fontSize="20px"
        fontWeight="500"
        color="#000"
      >
        ساختن ورک‌اسپیس جدید
      </Text>
      <Text>نام ورک‌اسپیس</Text>
      <Input
        autoFocus
        required
        type="text"
        value={spaceName}
        onChange={(e) => updateFields({ spaceName: e.target.value })}
      />
    </VStack>
  );
}
