import { Stack , HStack , Text , Button , Circle , Switch } from "@chakra-ui/react"


const btnStyle ={
    width:"354px"
};

const txtStyle ={
    fontSize:"14px",
    fontWeight:"400"
}


const Setting = ()=>
{
    
    return(
        <>
            <Stack width={"100vw"} mr={"0 !important"} height={"100vh"} background="#FAFBFC" paddingTop={"170px"} paddingRight={"58px"} >
                <Text fontSize={"31px"} fontWeight={"700"} mb={"25px"}>تنظیمات</Text>

                <Text sx={txtStyle}>انتخاب تم</Text>
                <HStack>
                    <Circle size="40px" padding="0"  bg="teal">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M20 6.5L9 17.5L4 12.5" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                    </Circle>
                    <Circle mr="13.36px !important" size="20.04px" bg="#78C6B0"></Circle>
                    <Circle mr="13.36px !important" size="20.04px" bg="#76BC86"></Circle>
                    <Circle mr="13.36px !important" size="20.04px" bg="#80DC69"></Circle>
                    <Circle mr="13.36px !important" size="20.04px" bg="#E46161"></Circle>
                    <Circle mr="13.36px !important" size="20.04px" bg="#E17E80"></Circle>
                    <Circle mr="13.36px !important" size="20.04px" bg="#EC8182"></Circle>
                    <Circle mr="13.36px !important" size="20.04px" bg="#F3C567"></Circle>
                    <Circle mr="13.36px !important" size="20.04px" bg="#E57A57"></Circle>
                    <Circle mr="13.36px !important" size="20.04px" bg="#F1A25C"></Circle>
                </HStack>

                <Switch size="lg" ml="calc(100% - 50px) !important" mt="50px !important" style={{direction:"ltr"}}>

                </Switch>
                
                <Button _hover={{backgroundColor:"#208D8E"}} sx={btnStyle} mt={"50px !important"} fontSize={"14px"} fontWeight={"700"} color={"#FFFFFF"} backgroundColor={"#208D8E"}>ثبت تغییرات</Button>
            </Stack>
        </>
    )
}

export default Setting;