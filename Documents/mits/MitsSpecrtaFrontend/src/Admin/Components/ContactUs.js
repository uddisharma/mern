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
import Loading from "../../Pages/Loading";
import Error from "../../Pages/Error";
import { fetchProducts } from "../../store/ProductSlice";
import { useDispatch, useSelector } from "react-redux";
const ContactUs = () => {
  const { data, status } = useSelector((state) => state.product);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    // dispatch(fetchProducts());
    setLoading(true);
    fetch("http://localhost:5000/contactus/details")
      .then((response) => response.json())
      .then((json) => {
        setProducts(json);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  }, []);
  console.log(products);
  if (loading) {
    return <Loading />;
  } else if (error) {
    return <Error />;
  } else {
    return (
      <div className="bg-white py-12 sm:py-16">
        <p className="mt-2 text-3xl font-bold tracking-tight text-center block m-auto text-indigo-900 pb-15 sm:text-4xl p-30">
          Contact Us List !
        </p>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Fist Name</Th>
                {/* <Th>Last Name</Th> */}
                <Th>Company</Th>
                <Th>Email</Th>
                <Th>Phone</Th>
                <Th>Message</Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.map((product) => (
                <Tr key={product._id}>
                  <Td>{product.firstname}</Td>
                  <Td>{product.company}</Td>
                  <Td>{product.email}</Td>
                  <Td>{product.phone}</Td>
                  <Td>{product.message.slice(0, 20) + "..."}</Td>
                </Tr>
              ))}
            </Tbody>
            {/* <Tfoot>
            <Tr>
              <Th>To convert</Th>
              <Th>into</Th>
              <Th isNumeric>multiply by</Th>
            </Tr>
          </Tfoot> */}
          </Table>
        </TableContainer>
      </div>
    );
  }
};

export default ContactUs;
