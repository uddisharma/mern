import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Box,
  Heading,
  Stack,
  StackDivider,
  Select,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState, useEffect } from "react";
function UpdateOrderStatus({ id }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const toast = useToast();
  console.log(id);
  const [products, setProducts] = useState([]);
  const [status, setStatus] = useState("");
  useEffect(() => {
    // dispatch(fetchProducts());

    fetch(`http://localhost:5000/order/${id}`)
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setProducts(json);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const handleChange = (e) => {
    setStatus(e.target.value);
  };
  const updateStatus = (e) => {
    e.preventDefault();
    console.log(status);
    {
      status !== "" && e.preventDefault();
      console.log(status);
      axios
        .patch(`http://localhost:5000/order/${id}`, {
          status: status,
        })
        .then((res) => {
          console.log(res);
          toast({
            title: "Status is Updated",
            description: "updated Successfully",
            status: "success",
            duration: 3000,
            isClosable: true,
          });
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };
  return (
    <>
      <Button onClick={onOpen}>View</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Order No. - {products._id}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Card>
              <CardHeader>
                <Heading size="md">Client Address</Heading>
              </CardHeader>

              <CardBody>
                <Stack divider={<StackDivider />} spacing="4">
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Name
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      {products.firstname} {products.lastname}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Full Address
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      {products.street} {products.city} {products.state}{" "}
                      {products.zip}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Contact Details
                    </Heading>
                    <Text pt="2" fontSize="sm">
                      {products.phone} <br /> {products.email}
                    </Text>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Order Status -
                      {/* {products.status ? products.status : "Confirmed"} */}
                      {products.payment === false
                        ? "Payment Pending"
                        : products.status}
                    </Heading>
                  </Box>
                  <Box>
                    <Heading size="xs" textTransform="uppercase">
                      Update Status
                    </Heading>
                    <form onSubmit={updateStatus}>
                      <Select
                        name="status"
                        value={status}
                        onChange={handleChange}
                        placeholder="Select option"
                      >
                        <option value="Confirmed">Confirmed</option>
                        <option value="Dispatched">Dispatched</option>
                        <option value="Out of Dlivery">Out of Delivery</option>
                        <option value="Delivered">Delivered</option>
                      </Select>{" "}
                      <br />
                      <Button type="submit" colorScheme="blue">
                        Update Status
                      </Button>
                    </form>
                  </Box>
                </Stack>
              </CardBody>
            </Card>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default UpdateOrderStatus;
