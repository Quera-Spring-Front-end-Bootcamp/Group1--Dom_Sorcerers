import {
  Card,
  CardHeader,
  Stack,
  Heading,
  CardBody,
  Text,
  Input,
  Button,
  Link,
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
  width: "500px",
  padding: "20px",
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
      <Header
        linkText={Strings.registerText}
        btnText={Strings.registerBtn}
        path={"/register"}
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
            <Heading fontSize="28px">به کوئرا تسک منیجر خوش برگشتی :) </Heading>
          </CardHeader>
          <CardBody sx={{ width: "100%" }}>
            <Text sx={lableStyle}>ایمیل</Text>
            <Input sx={inputStyle} />
            <Text sx={lableStyle} mt="20px">
              رمز عبور
            </Text>
            <Input sx={inputStyle} />
            <Link href="/forget">
              <Button sx={forgetButton} color="#208D8E" variant="link">
                رمز عبور را فراموش کرده‌ای؟
              </Button>
            </Link>
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
              <Link href="/register">
                <Button fontSize="14px" color="#208D8E" variant="link">
                  ثبت‌نام
                </Button>
              </Link>
            </Stack>
          </CardBody>
        </Card>
      </Stack>
    </Stack>
  );
};

export default Login;
