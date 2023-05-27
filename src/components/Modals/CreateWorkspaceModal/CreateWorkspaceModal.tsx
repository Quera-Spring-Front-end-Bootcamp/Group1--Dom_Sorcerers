import {
  Modal,
  ModalBody,
  ModalContent,
  Button,
  ModalOverlay,
  HStack,
  Flex,
  ModalHeader,
  Square,
  Stack,
  Box,
} from "@chakra-ui/react";
import { CLoseIcon } from "../../Icons";
// ----------------------------------
import { FormEvent, useState } from "react";
import { ConfirmForm } from "./ConfirmForm";
import { ColorForm } from "./ColorForm";
import { useMultistepForm } from "./useMultistepForm";
import { NameForm } from "./NameForm";
import { ArrowBackIcon } from "../../Icons/ArrowBackIcon";
type FormData = {
  spaceName: string;
  Color: string;
};
const INITIAL_DATA: FormData = {
  spaceName: "",
  Color: "",
};
// ----------------------------------

interface Props {
  onCloseModal: () => void;
  isShowModal: boolean;
}
export const CreateWorkspaceModal = ({ isShowModal, onCloseModal }: Props) => {
  const [data, setData] = useState(INITIAL_DATA);
  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const { steps, currentStepIndex, step, isFirstStep, isLastStep, back, next } =
    useMultistepForm([
      <NameForm {...data} updateFields={updateFields} />,
      <ColorForm {...data} updateFields={updateFields} />,
      <ConfirmForm spaceName={data.spaceName} color={data.Color} />,
    ]);

  function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    alert("Successful workspace Creation");
  }
  // ----------------------------------
  return (
    <>
      <Modal size="6xl" isCentered isOpen={isShowModal} onClose={onCloseModal}>
        <ModalOverlay />
        <ModalContent borderRadius="12px" width="500px" padding="20px">
          {/* ////////////////////////////////////HEADER/////////////////////////////////////////////// */}
          <ModalHeader padding="0">
            <HStack w="100%" alignItems="center" zIndex="10">
              <Flex
                _hover={{ cursor: "pointer" }}
                onClick={onCloseModal}
                alignItems="center"
                justifyContent="center"
              >
                <CLoseIcon />
              </Flex>
              {/* <Text
                width="100%"
                textAlign="center"
                fontSize="20px"
                fontWeight="500"
                color="#000"
              >
                ساخت ورک‌اسپیس جدید
              </Text> */}
            </HStack>
          </ModalHeader>
          {/* //////////////////////////////////////BODY////////////////////////////////////////////// */}
          <ModalBody padding="15px" position="relative" mt="-30px" zIndex="5">
            <Stack position="relative">
              <form onSubmit={onSubmit}>
                {/* --------------------------------PAGE Counter-------------------------------- */}
                <Box
                  style={{
                    direction: "ltr",
                    position: "absolute",
                    bottom: "40px",
                    left: "0.1rem",
                  }}
                >
                  {currentStepIndex + 1} / {steps.length}
                </Box>
                {/* --------------------------------BACK Arrow-------------------------------- */}
                <Box position="absolute" top="4px" left="2px">
                  {!isFirstStep && (
                    <Square onClick={back}>
                      <ArrowBackIcon />
                    </Square>
                  )}
                </Box>
                {/* ----------------------------Main content------------------------------ */}
                {step}
                {/* --------------------------------SUB BTN-------------------------------- */}
                <Button
                  type="submit"
                  background="#208D8E"
                  fontSize="14px"
                  mt="30px"
                  width="100%"
                  colorScheme="teal"
                  variant="solid"
                >
                  {isLastStep ? "ساختن ورک اسپیس" : "ادامه"}
                </Button>
              </form>
            </Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
