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
const DeleteProduct = () => {
  const toast = useToast();
  const { data, status } = useSelector((state) => state.product);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const getAllproducts = () => {
    setLoading(true);
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((json) => {
        setProducts(json.products);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  };
  useEffect(() => {
    // dispatch(fetchProducts());
    getAllproducts();
    // setLoading(true);
    // fetch("http://localhost:5000/products")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     setProducts(json.products);
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
      .delete(`http://localhost:5000/product/delete/${id}`)
      .then((res) => {
        toast({
          title: "Deleted Successfully.",
          description: "This item is deleted ",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        getAllproducts();
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
      <div className="bg-white py-12 sm:py-16">
        <p className="mt-2 text-3xl font-bold tracking-tight text-center block m-auto text-indigo-900 pb-15 sm:text-4xl p-30">
          Delete Product
        </p>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Image</Th>
                <Th>Name</Th>
                <Th isNumeric>Weight (gm)</Th>
                <Th>Particular</Th>
                {/* <Th>Composition</Th> */}
                <Th isNumeric>Rate</Th>
                <Th isNumeric>MRP</Th>
                <Th>Delete</Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.map((product) => (
                <Tr key={product._id}>
                  <Td>
                    <Avatar
                      size="md"
                      name="MITS Spectra"
                      src={
                        product.imgUrl.length < 35
                          ? `${process.env.PUBLIC_URL}/Mockups/${product.imgUrl}`
                          : product.imgUrl
                      }
                    />{" "}
                  </Td>
                  <Td>{product.name}</Td>
                  <Td isNumeric>{product.weight}</Td>
                  <Td>{product.particular}</Td>
                  {/* <Td>{product.composition.slice(0, 10) + "..."}</Td> */}
                  <Td isNumeric>{product.rate}</Td>
                  <Td isNumeric>{product.mrp}</Td>
                  <Td>
                    <MdOutlineDeleteForever
                      onClick={() => deleteProduct(product._id)}
                    />
                  </Td>
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

export default DeleteProduct;
