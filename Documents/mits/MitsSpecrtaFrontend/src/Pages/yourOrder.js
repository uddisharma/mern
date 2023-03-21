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
import Loading from "./Loading";
import { useAuth0 } from "@auth0/auth0-react";
import Error from "./Error";

import { useDispatch, useSelector } from "react-redux";
const YourOrders = () => {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const username = user.email || "uddibhardwaj08@gmail.com";
  useEffect(() => {
    // dispatch(fetchProducts());
    setLoading(true);
    fetch(`http://localhost:5000/orders/${username}`)
      .then((response) => response.json())
      .then((json) => {
        // console.log(json);
        setProducts(json);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  }, []);

  if (loading) {
    return <Loading />;
  } else if (error) {
    return <Error />;
  } else {
    return (
      <div className="bg-white py-12 sm:py-16 w-[80%] m-auto">
        <p className="mt-2 text-3xl font-bold tracking-tight text-center block m-auto text-indigo-900 pb-15 sm:text-4xl p-30">
          Order List !
        </p>
        <TableContainer className="pt-8">
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Sr. No.</Th>
                <Th>Product Name</Th>
                <Th>Category</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.length > 0 ? (
                products.map((product, i) => (
                  <Tr key={product._id}>
                    <Td>{i + 1}</Td>
                    <Td>{product.order.slice(43, 50)}..</Td>
                    <Td>{product.order.slice(93, 102)}..</Td>
                    {/* <Td>{product.status}</Td> */}
                    <Td>
                      {product.payment === false
                        ? "Payment Pending"
                        : product.status}
                    </Td>
                  </Tr>
                ))
              ) : (
                <div className="block m-auto w-[100%]">
                  <h1>No orders till now</h1>
                  <img
                    src="https://static.wixstatic.com/media/793b42_4ad9ba4befa449868526406b89c67017~mv2.gif"
                    alt=""
                  />
                </div>
              )}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    );
  }
};

export default YourOrders;
