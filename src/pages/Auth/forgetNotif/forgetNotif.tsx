import {
  Card,
  CardHeader,
  Stack,
  Heading,
  CardBody,
  Text,
} from "@chakra-ui/react";
import backGround from "../../../assets/backGround.png";
import Header from "../../../components/header/header";

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

const ForgetNotif = () => {
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
            <Text sx={lableStyle}>
              لینک بازیابی رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی
              کنید.
            </Text>
          </CardBody>
        </Card>
      </Stack>
    </Stack>
  );
};

export default ForgetNotif;
