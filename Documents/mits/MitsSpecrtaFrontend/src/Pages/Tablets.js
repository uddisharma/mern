import React, { useEffect, useState } from "react";
import { Data } from "../Data.js";
import Error from "./Error.js";
import Loading from "./Loading.js";
import { Link } from "react-router-dom";
import Sidebar from "../components/Sidebar.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/ProductSlice";
import { STATUSES } from "../store/ProductSlice";
import {
  Skeleton,
  Spinner,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
export default function Tablets() {
  const { data, status } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    // dispatch(fetchProducts());
    setLoading(true);
    fetch("http://localhost:5000/products/tablets&capsules")
      .then((response) => response.json())
      .then((json) => {
        setProducts(json.products);
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
      <div style={{ display: "flex" }} className="flex-row">
        <div>
          <Sidebar />
        </div>
        <div className="bg-white">
          <div className="mx-auto max-w-2xl pb-20  px-4  sm:px-6 lg:max-w-7xl lg:px-8">
            {/* <h2 className="text-[50px] text-[#4299e1] text-center font-bold tracking-tight">
            
            </h2> */}

            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {
                // data.length > 0 ? (
                products.map((product) => (
                  // <Skeleton isLoaded={!loading}>
                  <Link key={product._id} to={`/product/${product._id}`}>
                    <div key={product._id} className="group relative">
                      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                        <img
                          src={product.imgUrl}
                          // src={product.imageSrc}
                          alt={product.name}
                          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                        />
                      </div>
                      <div className="mt-4 flex justify-between">
                        <div>
                          <h3 className="text-sm text-gray-700">
                            <span
                              aria-hidden="true"
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
                  // </Skeleton>
                ))
                // )
                // : (
                //   <h1>Something went wrong</h1>
                // )
              }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
