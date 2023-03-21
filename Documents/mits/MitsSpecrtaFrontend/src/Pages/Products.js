import React, { useEffect, useState } from "react";
import { Data } from "../Data.js";
import Error from "./Error.js";
import Loading from "./Loading.js";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/ProductSlice";
import { STATUSES } from "../store/ProductSlice";
import ProductCard from "../components/ProductCard.js";
import { SimpleGrid, Box, Select } from "@chakra-ui/react";
import {
  Skeleton,
  Spinner,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import SearchModal from "../components/Modal.js";
export default function Products() {
  const { data, status } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [sort, setSort] = useState("");
  const [limit, setLimit] = useState(6);
  const [page, setPage] = useState(1);
  const handlesortChange = (e) => {
    setSort(e.target.value);
  };
  useEffect(() => {
    // dispatch(fetchProducts());
    setLoading(true);
    fetch(
      `http://localhost:5000/products?sort=${sort}&page=${page}&limit=${limit}`
    )
      .then((response) => response.json())
      .then((json) => {
        setProducts(json.products);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  }, [sort, page, limit]);
  // console.log(products);
  const handlellimitChange = (e) => {
    setLimit(e.target.value);
  };
  if (loading) {
    return <Loading />;
  } else if (error) {
    return <Error />;
  } else {
    return (
      <div style={{ display: "flex" }} className="flex-row">
        <div>
          <Sidebar />
        </div>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl pb-20  px-4  sm:px-6 lg:max-w-7xl lg:px-8">
            {/* <h2 className="text-[50px] text-[#4299e1] text-center font-bold tracking-tight">
            
            </h2> */}
            <div
              style={{
                display: "flex",
                justifyContent: "right",
                marginTop: "10px",
              }}
              className="flex-row"
            >
              <SearchModal />
              <div className="w-[150px] ">
                <Select onChange={handlellimitChange} placeholder="Set Limit">
                  <option value="6">6</option>
                  <option value="9">9</option>
                  <option value="12">12</option>
                </Select>
              </div>
              <div className="w-[150px] ">
                <Select onChange={handlesortChange} placeholder="Sort By">
                  <option value="-rate">Price : High to Low</option>
                  <option value="rate">Price : Low to High</option>
                  {/* <option value="option3"></option> */}
                </Select>
              </div>
            </div>

            <div
              // style={{ border: "2px solid red" }}
              className="mt-6 gr_id gr_id-cols-1 gap-y-10 gap-x-6 sm:gr_id-cols-2 lg:gr_id-cols-4 xl:gap-x-8"
            >
              <SimpleGrid columns={3} spacing={10}>
                {
                  // data.length > 0 ? (
                  products.map((product) => (
                    // <Box>
                    //   <ProductCard {...product} />
                    // </Box>
                    <Link key={product._id} to={`/product/${product._id}`}>
                      <div key={product._id} className="group relative">
                        <div className=" min-h-80 aspect-w-1 aspect-h-1 w-full overflow-h_idden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                          <img
                            src={product.imgUrl}
                            alt={product.name}
                            className="w-[50px] h-[100px] object-cover object-center lg:h-full lg:w-full"
                          />
                        </div>
                        <div className="mt-4 flex justify-between">
                          <div>
                            <h3 className="text-sm text-gray-700">
                              <span
                                aria-h_idden="true"
                                className="absolute inset-0"
                              />
                              {product.particular}
                              {/* </Link> */}
                            </h3>
                            <p className="mt-1 text-sm text-gray-500">
                              {product.name}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm font-medium text-gray-900">
                              {" "}
                              {product.rate}/Piece
                            </p>
                            <s className="text-sm text-right font-medium text-gray-900">
                              MRP: {product.mrp}
                            </s>
                          </div>
                        </div>
                      </div>
                    </Link>
                  ))
                }
              </SimpleGrid>
              <div className="block m-auto item-center mt-10">
                <button
                  disabled={page == 1}
                  onClick={() => setPage(page - 1)}
                  className="relative hidden items-center px-4 py-2 bg-indigo-600 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  -
                </button>
                <button className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                  {page}
                </button>
                <button
                  onClick={() => setPage(page + 1)}
                  className="relative hidden items-center px-4 py-2 bg-indigo-600 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                >
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
