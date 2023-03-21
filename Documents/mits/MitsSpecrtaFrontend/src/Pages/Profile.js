import React, { useState } from "react";
import {
  Progress,
  Box,
  ButtonGroup,
  Button,
  Heading,
  Flex,
  FormControl,
  GridItem,
  FormLabel,
  Input,
  Select,
  SimpleGrid,
  InputLeftAddon,
  InputGroup,
  Textarea,
  FormHelperText,
  InputRightElement,
  Avatar,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";

export default function Profile() {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  //   console.log(user);
  {
    isAuthenticated && localStorage.setItem("user-email", user.email);
  }
  return (
    <div className="w-[80%] pt-15 pb-15 py-32 m-auto">
      <Flex>
        <Heading w="100%" textAlign={"center"} fontWeight="normal" mb="2%">
          Hi 👋 {user.name}
        </Heading>

        <Avatar size="2xl" name={user.name} src={user.picture} />
      </Flex>

      <Flex>
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            First name
          </FormLabel>
          <Input
            id="first-name"
            defaultValue={user.given_name}
            placeholder="First name"
            readOnly
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={"normal"}>
            Last name
          </FormLabel>
          <Input
            id="last-name"
            defaultValue={user.family_name}
            placeholder="Last name"
            readOnly
          />
        </FormControl>
      </Flex>
      <Flex className="mt-10">
        <FormControl mr="5%">
          <FormLabel htmlFor="first-name" fontWeight={"normal"}>
            Nick name
          </FormLabel>
          <Input
            id="nick-name"
            defaultValue={user.nickname}
            placeholder="Nick name"
            readOnly
          />
        </FormControl>

        <FormControl>
          <FormLabel htmlFor="last-name" fontWeight={"normal"}>
            Email address
          </FormLabel>
          <Input
            id="last-name"
            defaultValue={user.email}
            readOnly
            placeholder="Email"
          />
        </FormControl>
      </Flex>
    </div>
  );
}

// toast({
//     title: "Details Saved.",
//     description: "Congrates you have saved your personal details",
//     status: "success",
//     duration: 3000,
//     isClosable: true,
//   });
