import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import axios from "axios";
import { useNavigate, Navigate } from "react-router-dom";
import { setAdminLogin } from "../store/AdminLoginSlice";
import React, { useContext, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useToast } from "@chakra-ui/react";
export default function AdminLogin() {
  // const navigate = useNavigate();
  const toast = useToast();
  const adminLogin = useSelector((state) => state.adminlogin);
  const [token, setToken] = useState("");
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const handlelogin = () => {
    // dispatch(setAdminLogin(true));
    // console.log(loginData);
    axios
      .post("http://localhost:5000/admin-login", loginData)
      .then((res) => {
        console.log("logged in successfully");

        console.log(res.data.token);
        if (res.data.token) {
          setToken(res.data.token);
          localStorage.setItem("token", res.data.token);
          dispatch(setAdminLogin(true));
          toast({
            title: "Login Successful.",
            description: "Welcome back Admin!",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
          // <Navigate to="/admin/dashboard" />;
        } else {
          dispatch(setAdminLogin(true));
          toast({
            title: "Login Failed.",
            description: "You are not Admin !",
            status: "failed",
            duration: 3000,
            isClosable: true,
          });
        }
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Login Failed.",
          description: "You are not Admin !",
          status: "failed",
          duration: 3000,
          isClosable: true,
        });
      });
  };

  const handleforgotpassword = () => {
    axios
      .get("http://localhost:5000/admin/forgot-password")
      .then((res) => {
        console.log(res)
        toast({
          title: "Your password sent to your email .",
          description: "Successful",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Failed.",
          description: "You are not Admin !",
          status: "failed",
          duration: 3000,
          isClosable: true,
        });
      });
  };
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  return (
    <>
      {token && <Navigate to="/admin/dashboard" replace={true} />}
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        // bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
          <Stack align={"center"}>
            <Heading fontSize={"4xl"}>Admin Login</Heading>
            <Text fontSize={"lg"} color={"gray.600"}>
              Welcome back Admin ✌️
            </Text>
          </Stack>
          <Box
            rounded={"lg"}
            // bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <Stack spacing={4}>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input name="email" onChange={handleChange} type="email" />
              </FormControl>
              <FormControl id="password">
                <FormLabel>Password</FormLabel>
                <Input
                  name="password"
                  onChange={handleChange}
                  type="password"
                />
              </FormControl>
              <Stack spacing={10}>
                <Stack
                  direction={{ base: "column", sm: "row" }}
                  align={"start"}
                  justify={"space-between"}
                >
                  <Checkbox>Remember me</Checkbox>
                  <Link onClick={handleforgotpassword} color={"blue.400"}>
                    Forgot password?
                  </Link>
                </Stack>
                {/* <Button
                  onClick={handlelogout}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  log out
                </Button> */}
                <Button
                  onClick={handlelogin}
                  bg={"blue.400"}
                  color={"white"}
                  _hover={{
                    bg: "blue.500",
                  }}
                >
                  Sign in
                </Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Flex>
    </>
  );
}
