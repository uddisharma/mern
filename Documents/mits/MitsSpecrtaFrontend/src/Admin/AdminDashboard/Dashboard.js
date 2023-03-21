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
import AddProduct from "../Components/AddProduct.js";
import HomeDash from "../Components/HomeDash.js";
import DataChart from "../../Charts/Chart.js";
export default function Dashborad() {
  const token = localStorage.getItem("token");
  // const notoken = !!localStorage.getItem("token");
  console.log(token.length);
  return (
    <div style={{ display: "flex" }} className="flex-row w-[90%] m-auto">
      {/* {notoken && <Navigate to="/" />} */}
      <div>
        <Sidebar />
      </div>
      <div className="bg-white">
        <DataChart />
        <HomeDash />
      </div>
    </div>
  );
}
