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
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import backGround from "../../../assets/backGround.png";
import Header from "../../../components/header/header";
import { useState } from "react";
import authApi from "../../../api/auth";
import { useToast } from "@chakra-ui/react";
import { useAuth } from "../../../context/authContext";

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
  const toast = useToast();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const authCtx = useAuth();

  const handleLogin = async () => {
    try {
      console.log(userData);
      const response = await authApi.login(userData);
      toast({
        title: "ورود موفق",
        // description: "ثبت‌نام شما با موفقیت انجام شد.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      authCtx.setUserToken(response.data.data.accessToken);
      authCtx.setUserAllData(response.data.data.toBeSendUserData);
      console.log(response.data.data.toBeSendUserData);
    } catch (ex) {
      console.log(ex);
      toast({
        title: "خطا",
        description: "مشکلی پیش آمده است.",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Stack
      sx={backGroundStyle}
      as="form"
      onSubmit={(e) => {
        e.preventDefault();
        handleLogin();
      }}
    >
      <Header
        linkText={"ثبت‌نام نکرده‌ای؟"}
        btnText={"ثبت نام"}
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
            <FormControl isRequired>
              <FormLabel sx={lableStyle}>ایمیل</FormLabel>
              <Input
                sx={inputStyle}
                onChange={(e) =>
                  setUserData({ ...userData, email: e.target.value })
                }
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel sx={lableStyle} mt="20px">
                رمز عبور
              </FormLabel>
              <Input
                sx={inputStyle}
                type="password"
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
            </FormControl>
            <Link href="/forget">
              <Button sx={forgetButton} color="#208D8E" variant="link">
                رمز عبور را فراموش کرده‌ای؟
              </Button>
            </Link>
            <Button
              type="submit"
              sx={submitButton}
              colorScheme="teal"
              variant="solid"
            >
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
