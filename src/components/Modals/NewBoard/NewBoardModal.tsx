import React, { useState } from "react";
import {
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  useToast,
  Flex,
  Input,
} from "@chakra-ui/react";
import boardApi from "../../../api/board";
import { CloseIcon } from "@chakra-ui/icons";

interface NewBoardModalProps {
  isShowModal: boolean;
  onCloseModal: () => void;
  id: string;
}

const NewBoardModal: React.FC<NewBoardModalProps> = ({
  isShowModal,
  onCloseModal,
  id,
}) => {
  const toast = useToast();
  const [boardName, setBoardName] = useState("");

  const handleCreate = async () => {
    try {
      const response = await boardApi.creatBoard({
        name: boardName,
        projectid: id,
      });
      // اضافه کردن بورد جدید به لیست بوردها

      toast({
        title: "ثبت موفق",
        description: "ستون جدید با موفقیت ایجاد شد.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
      onCloseModal();
    } catch (ex) {
      toast({
        title: "خطا",
        description: "مشکلی در ایجاد ستون جدید پیش آمده است.",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <>
      <Modal
        isCentered
        isOpen={isShowModal}
        onClose={onCloseModal}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <Flex w="100%" alignItems="center">
              <Flex
                _hover={{ cursor: "pointer" }}
                onClick={onCloseModal}
                alignItems="center"
                justifyContent="center"
                zIndex="10"
              >
                <CloseIcon />
              </Flex>
              <Text
                width="100%"
                textAlign="center"
                fontSize="20px"
                fontWeight="500"
                color="#000"
              >
                ساخت ستون جدید
              </Text>
            </Flex>
          </ModalHeader>
          <ModalBody>
            <Text marginBottom="15px">نام ستون</Text>
            <Input
              autoFocus
              required
              type="text"
              onChange={(e) => setBoardName(e.target.value)}
            />
            <Button
              type="submit"
              background="#208D8E"
              fontSize="14px"
              mt="30px"
              width="100%"
              colorScheme="teal"
              variant="solid"
              onClick={handleCreate}
              marginBottom="20px"
            >
              ساخت ستون
            </Button>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default NewBoardModal;

// -------------------------------------------------------------------------

// import {
//   Button,
//   HStack,
//   Text,
//   Modal,
//   ModalOverlay,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   useToast,
//   Flex,
//   Input,
// } from "@chakra-ui/react";
// import { useState, useEffect } from "react";
// import { CLoseIcon } from "../../Icons";
// import projectApi from "../../../api/project";
// import { useWorkspace } from "../../../context/workspaceContext";

// interface Props {
//   onCloseModal: () => void;
//   isShowModal: boolean;
//   id: string;
//   // setProjects: (p: projectsType) => void;
//   // projects: projectsType;
// }

// type createProjectType = {
//   name: string;
//   workspaceId: string;
//   members: [];
// };

// type projectsType = {
//   _id: string;
//   name: string;
//   workspace: string;
//   members: [];
//   board: [];
// }[];

// export default function NewBoardModal({
//   isShowModal,
//   onCloseModal,
//   id,
// }: Props) {
//   const toast = useToast();
//   const workSpaceCtx = useWorkspace();
//   const [project, setProject] = useState<createProjectType>({
//     name: "",
//     workspaceId: "",
//     members: [],
//   });

//   useEffect(() => {
//     setProject({ ...project, workspaceId: id });

//     console.log(project);
//   }, []);

//   const handleCreate = async () => {
//     try {
//       const response = await projectApi.createProject(project);
//       const data = response.data.data;
//       // const _project = {
//       //   _id: data.id,
//       //   name: data.name,
//       //   workspace: data.workspace,
//       //   members: data.members,
//       //   board: data.boards,
//       // };
//       // const _projects = [...projects];
//       // _projects.push(_project);
//       // setProjects(_projects);
//       // toast({
//       //   title: "ثبت‌ موفق",
//       //   description: "پروژه شما با موفقیت ثبت شد.",
//       //   status: "success",
//       //   duration: 3000,
//       //   isClosable: true,
//       // });
//       // console.log(response.data);
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
//         isCentered
//         isOpen={isShowModal}
//         onClose={onCloseModal}
//         motionPreset="slideInBottom"
//       >
//         <ModalOverlay />
//         <ModalContent>
//           <ModalHeader>
//             <HStack w="100%" alignItems="center">
//               <Flex
//                 _hover={{ cursor: "pointer" }}
//                 onClick={onCloseModal}
//                 alignItems="center"
//                 justifyContent="center"
//                 zIndex="10"
//               >
//                 <CLoseIcon />
//               </Flex>
//               <Text
//                 width="100%"
//                 textAlign="center"
//                 fontSize="20px"
//                 fontWeight="500"
//                 color="#000"
//               >
//                 ساخت ستون جدید{workSpaceCtx.workSpaceId}
//               </Text>
//             </HStack>
//           </ModalHeader>
//           <ModalBody>
//             <Text marginBottom="15px">نام ستون</Text>
//             <Input
//               autoFocus
//               required
//               type="text"
//               onChange={(e) => setProject({ ...project, name: e.target.value })}
//             />
//             <Button
//               type="submit"
//               background="#208D8E"
//               fontSize="14px"
//               mt="30px"
//               width="100%"
//               colorScheme="teal"
//               variant="solid"
//               onClick={handleCreate}
//               marginBottom="20px"
//             >
//               ساخت پروژه
//             </Button>
//           </ModalBody>
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }
