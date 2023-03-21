import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { SimpleGrid, Box } from "@chakra-ui/react";
import {
  Skeleton,
  Spinner,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import Sidebar from "../Components/DashSidebar.js";
import Orders from "../Components/Orders.js";

export default function OrderList() {
  const token = localStorage.getItem("token");
  // const notoken = !!localStorage.getItem("token");
  console.log(token.length);
  return (
    <div style={{ display: "flex" }} className="flex-row w-[90%] m-auto">
      {/* {notoken && <Navigate to="/" />} */}
      <div>
        <Sidebar />
      </div>
      <div className="bg-white"></div>
      <Orders />
    </div>
  );
}
