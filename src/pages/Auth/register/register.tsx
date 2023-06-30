import {
  Card,
  CardHeader,
  Stack,
  Heading,
  CardBody,
  Input,
  Button,
  Checkbox,
  FormControl,
  FormLabel,
  FormHelperText,
} from "@chakra-ui/react";
import backGround from "../../../assets/backGround.png";
import Header from "../../../components/header/header";
import { useState } from "react";
import authApi from "../../../api/auth";
import { useNavigate } from "react-router-dom";
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

const Register = () => {
  const navigate = useNavigate();
  const toast = useToast();
  const [userData, setUserData] = useState({
    username: "",
    password: "",
    email: "",
  });

  const [checked, setChecked] = useState(false);

  const handleRegister = async () => {
    try {
      console.log(userData);
      const response = await authApi.register(userData);
      navigate("/");
      toast({
        title: "ثبت‌نام موفق",
        description: "ثبت‌نام شما با موفقیت انجام شد.",
        status: "success",
        duration: 9000,
        isClosable: true,
      });
      console.log(response.data);
    } catch (ex) {
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
        if (checked) {
          handleRegister();
        }
      }}
    >
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
            <Heading fontSize="28px">ثبت نام در کوئرا تسک منیجر</Heading>
          </CardHeader>
          <CardBody sx={{ width: "100%" }}>
            <FormControl isRequired>
              <FormLabel sx={lableStyle}>نام کامل</FormLabel>
              <Input
                sx={inputStyle}
                onChange={(e) =>
                  setUserData({ ...userData, username: e.target.value })
                }
              />
            </FormControl>
            <FormControl isRequired>
              <FormLabel sx={lableStyle} mt="20px">
                ایمیل
              </FormLabel>
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
                onChange={(e) =>
                  setUserData({ ...userData, password: e.target.value })
                }
              />
            </FormControl>
            <FormControl isRequired>
              <Checkbox
                mt="20px"
                onChange={(e) => {
                  setChecked(e.target.checked);
                }}
              >
                قوانین و مقرارت را میپذریم.
              </Checkbox>
              <FormHelperText>
                {checked ? "" : "قوانین و مقرارت را باید بپذیرید."}
              </FormHelperText>
            </FormControl>
            <Button
              type="submit"
              sx={submitButton}
              colorScheme="teal"
              variant="solid"
              disabled={!checked}
            >
              ثبت‌نام
            </Button>
          </CardBody>
        </Card>
      </Stack>
    </Stack>
  );
};

export default Register;
