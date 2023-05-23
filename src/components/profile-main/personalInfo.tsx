import { Stack , HStack , Text , Button , Input } from "@chakra-ui/react"


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


const PersonalInfo = ()=>
{
    return(
        <>
            <Stack width="100vw" mr="0 !important" height="100vh" background="#FAFBFC" paddingTop="170px" paddingRight="58px" >
                <Text fontSize="31px" fontWeight="700" mb="25px">اطلاعات فردی</Text>
                <HStack gap="16px"> 
                    <Stack textAlign="center" margin="0 !important" width="100px" height="100px" backgroundColor = "#EAF562" borderRadius="50%">
                        <Text margin="auto" fontSize="35px" lineHeight="100%" fontWeight="500">NM</Text>
                    </Stack>

                    <Stack width="204px" height="80px" mb="12px">
                        <Button colorScheme='teal' variant='outline' _hover={{backgroundColor:"transparent"}} padding="10px" height="51px" fontSize="20px" fontWeight="500" >
                            <Text>ویرایش تصویر پروفایل</Text>
                        </Button>

                        <Text color="#8A8989" fontSize="12px" fontWeight="400">این تصویر برای عموم قابل نمایش است</Text>
                    </Stack>
                </HStack>

                <Stack mt="30px !important">
                    <Stack sx={formStyle}>
                        <Text sx={lableStyle}>نام</Text>
                        <Input sx={inputStyle}></Input>
                    </Stack>
                    <Stack sx={formStyle} mt="20px !important">
                        <Text sx={lableStyle}>نام خانوادگی</Text>
                        <Input sx={inputStyle}></Input>
                    </Stack>
                    <Stack sx={formStyle} mt="20px !important">
                        <Text sx={lableStyle}>شماره موبایل</Text>
                        <Input sx={inputStyle}></Input>
                    </Stack>
                    <Button _hover={{backgroundColor:"#208D8E"}} sx={formStyle} mt="48px !important" fontSize="14px" fontWeight={"700"} colorScheme="teal">ثبت تغییرات</Button>
                </Stack>
            </Stack>
        </>
    )
}

export default PersonalInfo;