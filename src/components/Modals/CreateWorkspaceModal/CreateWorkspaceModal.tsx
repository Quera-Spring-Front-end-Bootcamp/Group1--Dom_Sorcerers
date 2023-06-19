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
import workSpaceApi from "../../../api/workSpace";
import { useToast } from "@chakra-ui/react";

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
  const toast = useToast();

  function updateFields(fields: Partial<FormData>) {
    setData((prev) => {
      return { ...prev, ...fields };
    });
  }
  const {
    steps,
    currentStepIndex,
    step,
    isFirstStep,
    isLastStep,
    back,
    next,
    goTo,
  } = useMultistepForm([
    <NameForm {...data} updateFields={updateFields} />,
    <ColorForm {...data} updateFields={updateFields} />,
    <ConfirmForm spaceName={data.spaceName} color={data.Color} />,
  ]);

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    if (!isLastStep) return next();
    // alert("Successful workspace Creation");
    try {
      console.log(data);
      const response = await workSpaceApi.creatWorkSpace(data);
      toast({
        title: "عملیات موفق",
        description: "ورک اسپیس  با موفقیت ایجاد شد.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      setData(INITIAL_DATA);
      goTo(0);
      onCloseModal();
      console.log(response);
    } catch (ex) {
      toast({
        title: "خطا",
        description: "مشکلی پیش آمده است.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  }
  // ----------------------------------
  return (
    <>
      <Modal size="6xl" isCentered isOpen={isShowModal} onClose={onCloseModal}>
        <ModalOverlay />

        <ModalContent borderRadius="12px" width="500px" padding="20px">
          {/* ////////////////////////////////////HEADER/////////////////////////////////////////////// */}
          <ModalHeader padding="0">
            <HStack w="100%" alignItems="center">
              <Flex
                _hover={{ cursor: "pointer" }}
                onClick={onCloseModal}
                alignItems="center"
                justifyContent="center"
                zIndex="10"
              >
                <CLoseIcon />
              </Flex>
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
                    bottom: "-30px",
                    left: "47%",
                    zIndex: "50",
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
