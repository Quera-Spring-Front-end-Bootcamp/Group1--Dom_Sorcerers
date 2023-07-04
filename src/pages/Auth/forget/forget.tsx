import { useState } from "react";
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
import authApi from "../../../api/auth";
import { useToast } from "@chakra-ui/react";

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

const Forget = () => {
  const [email, setEmail] = useState("");
  const toast = useToast();

  const handleForgetPassword = async () => {
    try {
      const response = await authApi.forget({ email });
      console.log(response);
      toast({
        title: "ایمیل بازیابی رمز عبور ارسال شد",
        description: "ایمیل بازیابی رمز عبور به ایمیل شما ارسال شد.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    } catch (ex) {
      console.log(ex);
      // toast({
      //   title: "خطا",
      //   description: "مشکلی پیش آمده است.",
      //   status: "error",
      //   duration: 3000,
      //   isClosable: true,
      // });
    }
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  return (
    <Stack sx={backGroundStyle}>
      <Header
        linkText={"قبلا ثبت‌نام کرده‌ای؟"}
        btnText={"ورود"}
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
            <Heading fontSize="28px">فراموشی رمز عبور</Heading>
          </CardHeader>
          <CardBody sx={{ width: "100%" }}>
            <Text sx={lableStyle}>ایمیل خود را وارد کنید</Text>
            <Input sx={inputStyle} value={email} onChange={handleEmailChange} />
            <Link href="forgetnotif">
              <Button
                sx={submitButton}
                colorScheme="teal"
                variant="solid"
                mt="30px"
                onClick={handleForgetPassword}
              >
                دریافت ایمیل بازیابی رمز عبور
              </Button>
            </Link>
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

export default Forget;
