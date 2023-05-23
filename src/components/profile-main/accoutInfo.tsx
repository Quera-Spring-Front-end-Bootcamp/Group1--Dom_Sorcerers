import { Stack , Text , Button , Input } from "@chakra-ui/react"


const inputStyle = {
    borderColor: "#AAAAAA",
    backgroundColor:"#FFFFFF"
};

const formStyle ={
    width:"354px"
};

const lableStyle ={
    fontSize:"14px",
    fontWeight:"400"
}


const AccountInfo = ()=>
{
    return(
        <>
            <Stack width={"100vw"} mr={"0 !important"} height={"100vh"} background="#FAFBFC" paddingTop={"170px"} paddingRight={"58px"} >
                <Text fontSize={"31px"} fontWeight={"700"} mb={"25px"}>اطلاعات حساب</Text>

                <Stack sx={formStyle}>
                    <Text sx={lableStyle}>ایمیل</Text>
                    <Input sx={inputStyle}></Input>
                </Stack>
                <Stack sx={formStyle} mt={"20px !important"}>
                    <Text sx={lableStyle}>رمز عبور</Text>
                    <Input sx={inputStyle}></Input>
                </Stack>
                <Stack sx={formStyle} mt={"20px !important"}>
                    <Text sx={lableStyle}>نام کاربری</Text>
                    <Input sx={inputStyle}></Input>
                </Stack>
                <Button _hover={{backgroundColor:"#208D8E"}} sx={formStyle} mt={"48px !important"} fontSize={"14px"} fontWeight={"700"} color={"#FFFFFF"} backgroundColor={"#208D8E"}>ثبت تغییرات</Button>
            </Stack>
        </>
    )
}

export default AccountInfo;