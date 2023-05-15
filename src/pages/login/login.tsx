import {
  Card,
  CardHeader,
  Stack,
  Box,
  Heading,
  CardBody,
  Text,
  Input,
  Button,
} from "@chakra-ui/react";
import backGround from "../../assets/backGround.png";
import Header from "../../components/header/header";

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
  width: "528px",
  padding: "20px",
  marginTop: "30%",
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

const forgetButton = {
  color: "#208D8E",
  fontSize: "12px",
  mt: "10px",
};

const submitButton = {
  background: "#208D8E",
  fontSize: "14px",
  mt: "30px",
  width: "100%",
};

const Login = () => {
  return (
    <Stack sx={backGroundStyle}>
      <Header />
      <Box>
        <Card sx={cardStyle}>
          <CardHeader>
            <Heading size="lg">به کوئرا تسک منیجر خوش برگشتی :) </Heading>
          </CardHeader>
          <CardBody sx={{ width: "100%" }}>
            <Text sx={lableStyle}>ایمیل</Text>
            <Input sx={inputStyle} />
            <Text sx={lableStyle} mt="20px">
              رمز عبور
            </Text>
            <Input sx={inputStyle} />
            <Button sx={forgetButton} color="#208D8E" variant="link">
              رمز عبور را فراموش کرده‌ای؟
            </Button>
            <Button sx={submitButton} colorScheme="teal" variant="solid">
              ورود
            </Button>
            <Stack
              sx={{ justifyContent: "center", alignContent: "center" }}
              direction="row"
              spacing={2}
              mt="20px"
            >
              <Text fontSize="14px">ثبت‌نام نکرده‌ای؟</Text>
              <Button fontSize="14px" color="#208D8E" variant="link">
                ثبت‌نام
              </Button>
            </Stack>
          </CardBody>
        </Card>
      </Box>
    </Stack>
  );
};

export default Login;
