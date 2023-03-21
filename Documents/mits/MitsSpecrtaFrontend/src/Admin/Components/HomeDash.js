import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function HomeDash() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/users")
      .then((res) => {
        setUsers(res.data.users);
      })
      .catch((err) => {
        console.log(err);
      });
    axios
      .get("http://localhost:5000/products")
      .then((res) => {
        setProducts(res.data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  // console.log(products);
  return (
    <div
      style={{ display: "block", margin: "auto" }}
      className="bg-white py-12 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* <div className="mx-auto max-w-2xl lg:text-center">
          {/* <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Admin Dashboard
          </h2> 
          <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hey 👋 Admin Welcome Back !
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Nice to meet you again <br /> Here is your business Analytics
          </p>
        </div> */}
        <div className="mx-auto max-w-2xl  lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            <div className="relative pl-16">
              <dt className="text-2xl font-semibold leading-7 text-gray-900">
                <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <CloudArrowUpIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                Total Products :{" "}
                <span className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {products.length}
                </span>
              </dt>
            </div>
            <div className="relative pl-16">
              <dt className="text-2xl font-semibold leading-7 text-gray-900">
                <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <CloudArrowUpIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                Total Activate Users :{" "}
                <span className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {users.length}
                </span>
              </dt>
            </div>
            <div className="relative pl-16">
              <dt className="text-2xl font-semibold leading-7 text-gray-900">
                <div className="absolute top-0 left-0 flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600">
                  <CloudArrowUpIcon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                Total Orders :{" "}
                <span className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  {users.length}
                </span>
              </dt>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
