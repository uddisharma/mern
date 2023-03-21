import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Text,
  useDisclosure,
  Input,
  SimpleGrid,
  Box,
} from "@chakra-ui/react";
import { CgSearch } from "react-icons/cg";
import { Link } from "react-router-dom";
import Loading from "../Pages/Loading";
import Error from "../Pages/Error";
import React, { useEffect, useState } from "react";
function SearchModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [value, setValue] = useState("");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSearch = () => {
    setLoading(true);
    fetch(`http://localhost:5000/products?particular=${value}`)
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

  console.log(products);
  //   if (loading) {
  //     return <Loading />;
  //   } else if (error) {
  //     return <Error />;
  //   } else {
  return (
    <>
      <Button onClick={onOpen}>
        <CgSearch />
      </Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Search Products</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input
              onChange={handleChange}
              placeholder="Search Product by name"
            />{" "}
            <br />
            <div className="mt-5">
              <Button colorScheme="blue" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={handleSearch} colorScheme="blue">
                Search
              </Button>
            </div>
            <SimpleGrid className="pt-8" columns={3} spacing={10}>
              {products &&
                products.map((product) => (
                  <Link key={product._id} to={`/product/${product._id}`}>
                    <div key={product._id} className="group relative">
                      <div className=" min-h-50 aspect-w-1 aspect-h-1 w-full overflow-h_idden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-30">
                        <img
                          src={product.imgUrl}
                          alt={product.name}
                          className="w-[50px] h-[60px] object-cover object-center lg:h-[60px] lg:w-[60px]"
                        />
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div>
                          {/* <h3 className="text-sm text-gray-700">
                            <span
                              aria-h_idden="true"
                              className="absolute inset-0"
                            />
                            {product.particular}
                          </h3> */}
                          <p className="mt-1 text-sm text-gray-500">
                            {product.name}
                          </p>
                        </div>
                        {/* <div>
                          <p className="text-sm font-medium text-gray-900">
                            {" "}
                            {product.rate}/Piece
                          </p>
                          <s className="text-sm text-right font-medium text-gray-900">
                            MRP: {product.mrp}
                          </s>
                        </div> */}
                      </div>
                    </div>
                  </Link>
                ))}
            </SimpleGrid>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
}

export default SearchModal;
