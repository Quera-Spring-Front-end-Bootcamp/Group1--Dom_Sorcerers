import { Text } from "@chakra-ui/react";
import { ReactNode } from "react";

type FormWrapperProps = {
  title: string;
  children: ReactNode;
};

export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <Text
        width="100%"
        textAlign="center"
        fontSize="20px"
        fontWeight="500"
        color="#000"
      >
        {title}
      </Text>
      <div
        style={{
          display: "flex",
          flexFlow: "column",
          gap: "1rem .5rem",
          justifyContent: "flex-start",
          gridTemplateColumns: "auto minmax(auto, 400px)",
        }}
      >
        {children}
      </div>
    </>
  );
}
