import {
  Box,
  Button,
  Flex,
  HStack,
  Input,
  Spacer,
  Stack,
  Text,
  Textarea,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useToast,
  Select,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import UploadIcon from "../../Icons/uploadIcon";
import CalendartwoIcon from "../../Icons/calendartwoIcon";
import AddUserIcon from "../../Icons/addUserIcon";
import RectangleIcon from "../../Icons/rectangleIcon";
import { EIcon } from "../../Icons/EIcon";
import TagMenu from "../../menus/tagMenu";
import PriorityMenu from "../../menus/priorityMenu";

import taskApi from "../../../api/task";
import { useWorkspace } from "../../../context/workspaceContext";

interface Props {
  onCloseModal: () => void;
  isShowModal: boolean;
  // id: string;
}

export default function NewTaskModal({ isShowModal, onCloseModal }: Props) {
  ///console.log(id);
  const workSpaceCtx = useWorkspace();
  const toast = useToast();
  const [boards, setBoards] = useState(workSpaceCtx.boards);
  const [boardId, setBoardId] = useState("");
  const [taskData, settaskData] = useState({
    name: "",
    description: "",
    boardId: boardId,
  });

  useEffect(() => {
    setBoards(workSpaceCtx.boards);
  });

  const handleCreate = async () => {
    try {
      console.log(taskData);
      const response = await taskApi.creatTask(taskData);
      console.log(response);

      toast({
        title: "ثبت‌ موفق",
        description: "تسک شما با موفقیت ثبت شد.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      //console.log(response.data);
      onCloseModal();
    } catch (ex) {
      toast({
        title: "خطا",
        description: "مشکلی پیش آمده است.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
      // console.log(response.data);
    }
  };

  return (
    <>
      <Modal
        size="6xl"
        isCentered
        isOpen={isShowModal}
        onClose={onCloseModal}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <HStack>
              <RectangleIcon />
              <Text fontSize="28px" fontWeight="bold">
                تسک جدید
              </Text>
            </HStack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <HStack mt="19px">
              <Text>ایجاد</Text>
              {/* ____________________________________________________________________________ */}
              <Input
                placeholder="عنوان تسک"
                width="158px"
                height="33px"
                onChange={(e) =>
                  settaskData({ ...taskData, name: e.target.value })
                }
              ></Input>
              <Text>در</Text>
              <Select
                value={boardId}
                onChange={(e) => {
                  settaskData({ ...taskData, boardId: e.target.value });
                  setBoardId(e.target.value);
                  console.log(e.target.value);
                  console.log(boardId);
                }}
                placeholder="ستون"
                size="sm"
                width="200px"
              >
                {boards?.map((board) => (
                  <option value={board._id}>{board.name}</option>
                ))}
              </Select>
              <Text>برای</Text>
              <AddUserIcon />
            </HStack>
            <Textarea
              resize="none"
              placeholder="توضیحاتی برای این تسک بنویسید"
              sx={{
                height: "220px",
                borderColor: "#AAAAAA",
                marginTop: "30px",
                alignItems: "flex-start",
              }}
              onChange={(e) =>
                settaskData({ ...taskData, description: e.target.value })
              }
            ></Textarea>
            <HStack py="20px">
              <Flex alignItems="center">
                <Text padding="10px"> افزودن پیوست</Text>
                <Button
                  sx={{
                    borderRadius: "4px",
                    border: "solid 1px",
                    borderColor: "primary.600",
                    padding: "8px",
                    bg: "white",
                  }}
                  leftIcon={<UploadIcon />}
                >
                  آپلود فایل
                </Button>
              </Flex>
            </HStack>
            <HStack alignItems="center" marginTop="15px">
              <Flex gap="10px">
                <TagMenu />

                <CalendartwoIcon />
                <PriorityMenu />

                <Box
                  position="relative"
                  width="50px"
                  height="50px"
                  _after={{
                    position: "absolute",
                    fontSize: "12px",
                    fontWeight: "500",
                    content: `"${(2).toLocaleString("fa-IR")}"`,
                    width: "17px",
                    height: "17px",
                    bg: "#4AB7D8",
                    top: "-2px",
                    right: "1px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    borderRadius: "50%",
                    padding: "2px",
                  }}
                >
                  <EIcon />
                </Box>
              </Flex>
              <Spacer />
              <Button
                onClick={handleCreate}
                sx={{
                  background: "#208D8E",
                  color: "#FFFFFF",
                  width: "119px",
                  borderRadius: "4px",
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  py: "4px",
                  px: "7px",
                  gap: "10px",
                }}
                mr={2}
              >
                ساختن تسک
              </Button>
            </HStack>
            <Stack
              sx={{ justifyContent: "center", alignContent: "center" }}
              direction="row"
              spacing={2}
              mt="20px"
            ></Stack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}
// --------------------------------------------------------------------------------------------------------

// const [boards, setBoards] = useState([]);
// useEffect(() => {
//   const fetchBoards = async () => {
//     try {
//       const response = await getAllProjectBoards(id);
//       console.log(id);
//       setBoards(response.data);
//     } catch (ex) {
//       console.log(ex);
//     }
//   };
//   fetchBoards();
// }, [id]);
//   const handleCreate = async () => {
//     try {
//       const response = await taskApi.creatTask(taskData);
//       toast({
//         title: "ثبت‌ موفق",
//         description: "تسک شما با موفقیت ثبت شد.",
//         status: "success",
//         duration: 3000,
//         isClosable: true,
//       });
//       onCloseModal();
//     } catch (ex) {
//       toast({
//         title: "خطا",
//         description: "مشکلی پیش آمده است.",
//         status: "error",
//         duration: 3000,
//         isClosable: true,
//       });
//     }
//   };

//   return (
//     <>
//       <Modal
//         size="6xl"
//         isCentered
//         isOpen={isShowModal}
//         onClose={onCloseModal}
//         motionPreset="slideInBottom"
//       >
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>
//             <HStack>
//               <RectangleIcon />
//               <Text fontSize="xl">ایجاد تسک جدید</Text>
//             </HStack>
//           </ModalHeader>
//           <ModalCloseButton />
//           <ModalBody>
//             <Stack spacing="24px">
//               <Input
//                 placeholder="عنوان تسک"
//                 value={taskData.name}
//                 onChange={(e) =>
//                   setTaskData({ ...taskData, name: e.target.value })
//                 }
//               />
//               <Textarea
//                 placeholder="توضیحات"
//                 value={taskData.description}
//                 onChange={(e) =>
//                   setTaskData({ ...taskData, description: e.target.value })
//                 }
//               />
// <Select
//   placeholder="بورد مورد نظر را انتخاب کنید"
//   value={taskData.boardId}
//   onChange={(e) =>
//     setTaskData({ ...taskData, boardId: e.target.value })
//   }
// >
//   {boards.map((board: any) => (
//     <option key={board.id} value={board.id}>
//       {board.name}
//     </option>
//   ))}
// </Select>
//               <HStack>
//                 <TagMenu />
//                 <PriorityMenu />
//               </HStack>
//               <Flex>
//                 <Box>
//                   <Button leftIcon={<UploadIcon />} variant="ghost">
//                     آپلود فایل
//                   </Button>
//                 </Box>
//                 <Spacer />
//                 <Box>
//                   <Button leftIcon={<CalendartwoIcon />} variant="ghost">
//                     تاریخ
//                   </Button>
//                 </Box>
//                 <Spacer />
//                 <Box>
//                   <Button leftIcon={<AddUserIcon />} variant="ghost">
//                     افزودن کاربر
//                   </Button>
//                 </Box>
//               </Flex>
//               <Button
//                 leftIcon={<EIcon />}
//                 colorScheme="green"
//                 onClick={handleCreate}
//               >
//                 ایجاد تسک
//               </Button>
//             </Stack>
//           </ModalBody>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }
