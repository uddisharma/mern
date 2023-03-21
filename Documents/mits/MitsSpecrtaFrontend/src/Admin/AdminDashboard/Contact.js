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
import ContactUs from "../Components/ContactUs.js";
export default function ContactUsDetails() {
  {
    return (
      <div style={{ display: "flex" }} className="flex-row w-[90%] m-auto">
        <div>
          <Sidebar />
        </div>
        <div className="bg-white"></div>
        <ContactUs />
      </div>
    );
  }
}
