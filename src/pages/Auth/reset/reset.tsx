import {
  Card,
  CardHeader,
  Stack,
  Heading,
  CardBody,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";
import backGround from "../../../assets/backGround.png";
import Header from "../../../components/header/header";
import Strings from "../../../data/string";

const backGroundStyle = {
  backgroundImage: `url(${backGround})`,
  backgroundSize: "100% 60%",
  backgroundRepeat: "no-repeat",
  backgroundPosition: "bottom",
  height: "100vh",
  px: "100px",
  py: "50px",
  alignItems: "center",
};

const cardStyle = {
  width: "450px",
  padding: "10px",
  alignItems: "center",
  borderRadius: "20px",
  boxShadow: "0px 12px 50px rgba(0, 0, 0, 0.18)",
};

const lableStyle = {
  fontSize: "14px",
  mb: "8px",
};

const inputStyle = {
  borderColor: "#AAAAAA",
};

const submitButton = {
  background: "#208D8E",
  fontSize: "14px",
  mt: "30px",
  width: "100%",
};

const Reset = () => {
  return (
    <Stack sx={backGroundStyle}>
      <Header
        linkText={Strings.loginText}
        btnText={Strings.loginBtn}
        path={"/login"}
      />
      <Stack
        sx={{
          height: "100vh",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card sx={cardStyle}>
          <CardHeader>
            <Heading fontSize="28px">بازیابی رمز عبور</Heading>
          </CardHeader>
          <CardBody sx={{ width: "100%" }}>
            <Text sx={lableStyle}>پسورد جدید خود را وارد کنید</Text>
            <Input sx={inputStyle} />

            <Text sx={lableStyle} mt="20px">
              تایید پسورد
            </Text>
            <Input sx={inputStyle} />

            <Button sx={submitButton} colorScheme="teal" variant="solid">
              ذخیره
            </Button>
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
  );
};

export default Reset;
