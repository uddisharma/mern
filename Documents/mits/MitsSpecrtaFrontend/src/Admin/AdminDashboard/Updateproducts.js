import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

import { SimpleGrid, Box } from "@chakra-ui/react";
import {
  Skeleton,
  Spinner,
  SkeletonCircle,
  SkeletonText,
} from "@chakra-ui/react";
import Sidebar from "../Components/DashSidebar.js";
import Update from "../Components/Update.js";
export default function UpdateProduct() {
  {
    return (
      <div style={{ display: "flex" }} className="flex-row w-[90%] m-auto">
        <div>
          <Sidebar />
        </div>
        <div className="bg-white"></div>
        <Update />
      </div>
    );
  }
}
