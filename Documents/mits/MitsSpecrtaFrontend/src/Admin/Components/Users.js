import React, { useEffect, useState } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Avatar,
} from "@chakra-ui/react";
import { MdOutlineDeleteForever } from "react-icons/md";
import Loading from "../../Pages/Loading";
import Error from "../../Pages/Error";
import { fetchProducts } from "../../store/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
import { BiPointer } from "react-icons/bi";
const Users = () => {
  const toast = useToast();
  const { data, status } = useSelector((state) => state.product);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const AllUsers = () => {
    setLoading(true);
    fetch("http://localhost:5000/users")
      .then((response) => response.json())
      .then((json) => {
        setProducts(json.users);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  };
  useEffect(() => {
    AllUsers();
    // dispatch(fetchProducts());
    // setLoading(true);
    // fetch("http://localhost:5000/users")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setProducts(json.users);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     setError(true);
    //     console.log(error);
    //   });
  }, []);
  console.log(products);
  const deleteProduct = (id) => {
    axios
      .delete(`http://localhost:5000/user/delete/${id}`)
      .then((res) => {
        toast({
          title: "Deleted Successfully.",
          description: "This user is deleted ",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        AllUsers();
        console.log(res);
      })
      .catch((err) => {
        toast({
          title: "Failed",
          description: "Failed Deletion",
          status: "failed",
          duration: 3000,
          isClosable: true,
        });
        console.log(err);
      });
  };
  if (loading) {
    return <Loading />;
  } else if (error) {
    return <Error />;
  } else {
    return (
      <>
        <div className="bg-white py-12 sm:py-16">
          <p className="mt-2 text-3xl font-bold tracking-tight text-center block m-auto text-indigo-900 pb-15 sm:text-4xl p-30">
            Users List !
          </p>
          <TableContainer>
            <Table variant="simple">
              <Thead>
                <Tr>
                  <Th> First Name</Th>

                  <Th>Email</Th>

                  <Th>Hashed Password</Th>
                  <Th isNumeric>TC</Th>
                  <Th>Delete</Th>
                </Tr>
              </Thead>
              <Tbody>
                {products.map((product) => (
                  <Tr key={product._id}>
                    <Td>{product.name}</Td>

                    <Td>{product.email}</Td>

                    <Td>{product.password.slice(0, 10)}...</Td>
                    <Td>{product.tc == true ? "Accpected" : "Rejected"}</Td>
                    <Td>
                      <MdOutlineDeleteForever
                        onClick={() => deleteProduct(product._id)}
                      />
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        </div>
      </>
    );
  }
};

export default Users;
