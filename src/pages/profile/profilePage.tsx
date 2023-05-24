import { Stack, HStack, Button, Text, Icon } from "@chakra-ui/react";
import { Logo } from "../../components/logo";
import { Outlet, NavLink } from "react-router-dom";

const styles = {
  fontSize: "20px",
  fontWeight: "600",
  height: "39px",
  width: "266px",
  borderRadius: "4px",
  paddingRight: "15px",
  gap: "10px",
  alineItems: "center",
};

const ProfilePage = () => {
  return (
    <>
      <HStack>
        <Stack
          borderLeft="0.5px solid rgba(170, 170, 170, 1)"
          as="aside"
          width="340px"
          alignItems="center"
          background="#FAFBFC"
          padding="40px 40px 30px 16px"
          gap="79px"
          right="0"
          height="100vh"
          position="sticky"
        >
          <Logo />

          <Stack width="284px" height="500px" gap={"32px"}>
            <NavLink to="/">
              <Button
                colorScheme="teal"
                _hover={{ backgroundColor: "#208D8E" }}
                width={"110px"}
                height={"39px"}
                paddingRight="8px"
                gap={"8px"}
                fontSize={"20px"}
                fontWeight={"500"}
              >
                <Icon>
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M4.48047 12.48H19.4705"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M13.4834 6.48804L19.5204 12.5L13.4834 18.512"
                      stroke="white"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Icon>
                <Text>بازگشت</Text>
              </Button>
            </NavLink>

            <NavLink
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#C5FFFF" : "transparent",
                };
              }}
              to="personal-info"
            >
              <HStack sx={styles}>
                <Icon>
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.0005 5.7C16.7005 7.4 16.7005 10.1 15.0005 11.7C13.3005 13.3 10.6005 13.4 9.00048 11.7C7.40048 10 7.30048 7.3 9.00048 5.7C10.7005 4.1 13.3005 4.1 15.0005 5.7"
                      stroke="#323232"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M4 20.5C4 18 6 16 8.5 16H11.1"
                      stroke="#323232"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14 21.5H16.3L19.7 18.1C20.1 17.7 20.1 17.1 19.7 16.7L18.8 15.8C18.4 15.4 17.8 15.4 17.4 15.8L14 19.2V21.5V21.5H14Z"
                      stroke="#323232"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Icon>
                <Text>اطلاعات فردی</Text>
              </HStack>
            </NavLink>

            <NavLink
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#C5FFFF" : "transparent",
                };
              }}
              to="account-info"
            >
              <HStack sx={styles} cursor="pointer">
                <Icon>
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="12.0008"
                      cy="8.7486"
                      r="4.25177"
                      stroke="#323232"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M3.99707 20.5036C3.99707 18.0175 6.01291 16.0017 8.49895 16.0017H11.083"
                      stroke="#323232"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M19.0031 17.4402L16.0019 20.4414L14.2021 18.6407"
                      stroke="#323232"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Icon>
                <Text>اطلاعات حساب</Text>
              </HStack>
            </NavLink>

            <NavLink
              style={({ isActive }) => {
                return {
                  backgroundColor: isActive ? "#C5FFFF" : "transparent",
                };
              }}
              to="setting"
            >
              <HStack sx={styles} cursor="pointer">
                <Icon>
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M14.1213 10.3787C15.2929 11.5502 15.2929 13.4497 14.1213 14.6213C12.9497 15.7929 11.0502 15.7929 9.87868 14.6213C8.70711 13.4497 8.70711 11.5502 9.87868 10.3787C11.0502 9.20711 12.9497 9.20711 14.1213 10.3787"
                      stroke="#323232"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M16.18 19.225V19.225C16.683 19.728 17.5 19.728 18.003 19.225L18.725 18.503C19.228 18 19.228 17.183 18.725 16.68V16.68C18.343 16.298 18.231 15.725 18.441 15.227C18.463 15.174 18.485 15.121 18.506 15.067C18.689 14.601 19.143 14.301 19.643 14.301H19.71C20.422 14.301 20.999 13.724 20.999 13.012V11.991C20.999 11.279 20.422 10.702 19.71 10.702H19.643C19.143 10.702 18.689 10.401 18.506 9.936C18.485 9.882 18.463 9.829 18.441 9.776C18.231 9.278 18.343 8.705 18.725 8.323V8.323C19.228 7.82 19.228 7.003 18.725 6.5L18.003 5.778C17.5 5.275 16.683 5.275 16.18 5.778V5.778C15.798 6.16 15.225 6.272 14.727 6.062C14.674 6.04 14.621 6.018 14.567 5.997C14.101 5.811 13.8 5.356 13.8 4.856V4.789C13.8 4.077 13.223 3.5 12.511 3.5H11.49C10.777 3.5 10.2 4.077 10.2 4.789V4.856C10.2 5.356 9.899 5.81 9.434 5.993C9.38 6.015 9.327 6.036 9.274 6.059C8.776 6.269 8.203 6.157 7.821 5.775V5.775C7.318 5.272 6.501 5.272 5.998 5.775L5.275 6.497C4.772 7 4.772 7.817 5.275 8.32V8.32C5.657 8.702 5.769 9.275 5.559 9.773C5.536 9.827 5.515 9.88 5.494 9.934C5.311 10.399 4.856 10.7 4.356 10.7H4.289C3.577 10.7 3 11.277 3 11.989V13.01C3 13.723 3.577 14.3 4.289 14.3H4.356C4.856 14.3 5.31 14.601 5.493 15.066C5.514 15.12 5.536 15.173 5.558 15.226C5.768 15.724 5.656 16.297 5.274 16.679V16.679C4.771 17.182 4.771 17.999 5.274 18.502L5.996 19.224C6.499 19.727 7.316 19.727 7.819 19.224V19.224C8.201 18.842 8.774 18.73 9.272 18.94C9.325 18.962 9.378 18.984 9.432 19.005C9.898 19.188 10.198 19.642 10.198 20.142V20.209C10.198 20.921 10.775 21.498 11.487 21.498H12.508C13.22 21.498 13.797 20.921 13.797 20.209V20.142C13.797 19.642 14.098 19.188 14.563 19.005C14.617 18.984 14.67 18.962 14.723 18.94C15.224 18.731 15.797 18.843 16.18 19.225V19.225Z"
                      stroke="#323232"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </Icon>
                <Text>تنظیمات</Text>
              </HStack>
            </NavLink>
          </Stack>
        </Stack>

        <Outlet />
      </HStack>
    </>
  );
};

export default ProfilePage;
