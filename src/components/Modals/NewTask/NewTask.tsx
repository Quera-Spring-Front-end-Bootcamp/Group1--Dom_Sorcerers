import {  Button, Card, CardBody, CardHeader, Flex, HStack, Input, Spacer, Stack, Text, Textarea} from "@chakra-ui/react";
import TagIcon from "../../Icons/tagIcon";
import UploadIcon from "../../Icons/uploadIcon";
import EyeIcon from "../../Icons/eyeIcon";
import CalendartwoIcon from "../../Icons/calendartwoIcon";
import FlagIcone from "../../Icons/flagIcone";
import AddUserIcon from "../../Icons/addUserIcon";
import RectangleIcon from "../../Icons/rectangleIcon";
import DeletIcone from "../../Icons/deletIcone";



const backGroundStyle = {
  backgroundSize: "100% 60%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  height: "100vh",
  px: "100px",
  py: "50px",
  alignItems: "center",
};
const cardStyle = {
  width: "1120px",
  padding: "10px",
  borderRadius: "20px",
  boxShadow: "0px 12px 50px rgba(0, 0, 0, 0.18)",
  fontWeight: "400",

};

const lablePut = {
  width: "200px",
  color: "red",
  mx: "8px",
}
const inputStyle = {
  height: "220px",
  borderColor: "#AAAAAA",
  marginTop: "30px",
  alignItems: "flex-start"
};
const submitBtn = {
  background: "#208D8E",
  color: "#FFFFFF",
  width:"119px",
  borderRadius:"4px",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  py:"4px",
  px:"7px",
  gap: "10px",
};
const uploadBtn = {
  borderRadius:"4px",
  borderColor:"primary.600",
  padding:"8px",
  bg:"white",
}

export default function NewTask() {
  return (
      <Stack sx={backGroundStyle}>
        <Stack
                sx={{
                height: "100vh",
                justifyContent: "center",
                alignItems: "center",  
              }}>


          <Card sx={cardStyle}>
                  <HStack mr="15px" mt="10px">
                    <RectangleIcon / >
                    <Text fontSize="28px" fontWeight="bold">عنوان تسک</Text>
                  <Spacer />
                  <DeletIcone />
                  </HStack>

                  <HStack mt="19px">
                    <Text>در</Text>
                    <Input placeholder="پروژه اول" width="158px" height="33px"></Input>
                    <Text>یرای</Text>
                    <AddUserIcon />
                  </HStack>

            <CardBody sx={{ width: "100%" }}>

               <Textarea resize="none" placeholder="توضیحاتی برای این تسک بنویسید" sx={inputStyle}></Textarea>

              <HStack py="20px">
                  <Flex alignItems="center">
                  <Text padding="10px"> افزودن پیوست</Text>
                    <Button sx={uploadBtn} leftIcon={<UploadIcon />} >آپلود فایل </Button>
                  </Flex>
              </HStack>
              
      <HStack alignItems="center" marginTop="15px" >

        <Flex gap="10px">
           <FlagIcone />
           <CalendartwoIcon />
           <TagIcon />
           <EyeIcon />
        </Flex>
        <Spacer />
        <Button sx={submitBtn}  mr={2}>
             ساختن تسک
         </Button>
      </HStack>
            <Stack
              sx={{ justifyContent: "center", alignContent: "center" }}
              direction="row"
              spacing={2}
              mt="20px"
            ></Stack>
             </CardBody>
          </Card>

        </Stack>
      </Stack>
    )
}
