import {
  Center,
  HStack,
  Square,
  VStack,
  Wrap,
  WrapItem,
  Text,
} from "@chakra-ui/react";
import { NoColorIcon } from "../../../Icons/NoColorIcon";

const ColorDataList = [
  {
    ID: 1,
    Color: "#84C6A1",
  },
  {
    ID: 2,
    Color: "#78C6B0",
  },
  {
    ID: 3,
    Color: "#76BC86 ",
  },
  {
    ID: 4,
    Color: "#80DC69",
  },
  {
    ID: 5,
    Color: "#E46161",
  },
  {
    ID: 6,
    Color: "#E17E80",
  },
  {
    ID: 7,
    Color: "#EC8182",
  },
  {
    ID: 8,
    Color: "#F3C567",
  },
  {
    ID: 9,
    Color: "#B9995E",
  },
  {
    ID: 10,
    Color: "#E57A57",
  },
  {
    ID: 11,
    Color: "#F1A25C",
  },
  {
    ID: 12,
    Color: "#E28A60",
  },
  {
    ID: 13,
    Color: "#6897C2",
  },
  {
    ID: 14,
    Color: "#74AADD",
  },
  {
    ID: 15,
    Color: "#3C45E7",
  },
  {
    ID: 16,
    Color: "#6DAFCE",
  },
  {
    ID: 17,
    Color: "#6CB2F7",
  },
  {
    ID: 18,
    Color: "#9286EA",
  },
  {
    ID: 19,
    Color: "#C074D1",
  },
  {
    ID: 20,
    Color: "#486774",
  },
  {
    ID: 21,
    Color: "#5F6C7C",
  },
  {
    ID: 22,
    Color: "#46494D",
  },
  {
    ID: 23,
    Color: "#7FA1D1",
  },
];

type ColorData = {
  spaceName: string;
  Color: string;
};

type ColorFormProps = ColorData & {
  updateFields: (fields: Partial<ColorData>) => void;
};

export function ColorForm({ spaceName, Color, updateFields }: ColorFormProps) {
  return (
    <VStack align="right" width="100%" gap="10px">
      <Text
        width="100%"
        textAlign="center"
        fontSize="20px"
        fontWeight="500"
        color="#000"
      >
        انتخاب رنگ ورک‌اسپیس
      </Text>
      <HStack gap="10px">
        {/* -------------------‌Big color Square------------------- */}
        <Center>
          <Square
            size="70px"
            bg={Color ? Color : "gray"}
            color="white"
            borderRadius="5px"
          >
            {/* Showing First Word of Workspace Name */}
            {spaceName
              .split(" ")
              .map((word) => word[0])
              .join(" ")}
          </Square>
        </Center>
        {/* --------------------small color Square----------------- */}
        <VStack align="right" width="80%">
          <Text>رنگ ورک‌اسپیس</Text>
          <HStack>
            <Wrap spacing="10px" width="310px">
              <WrapItem>
                <Center>
                  <Square
                    onClick={() => updateFields({ Color: "gray" })}
                    size="16px"
                    color="white"
                    borderRadius="5px"
                  >
                    <NoColorIcon />
                  </Square>
                </Center>
              </WrapItem>
              {/* #######map on ColorData DATA######### */}
              {ColorDataList.map((data) => (
                <WrapItem>
                  <Center>
                    <Square
                      onClick={() => updateFields({ Color: data.Color })}
                      size="16px"
                      bg={data.Color}
                      color="white"
                      borderRadius="5px"
                    />
                  </Center>
                </WrapItem>
              ))}
              {/* ###########map END########### */}
            </Wrap>
          </HStack>
        </VStack>
      </HStack>
      {/* <label>{Color}</label> */}
    </VStack>
  );
}
