import React, { useEffect, useState } from "react";
import axios from "axios";

import {
  PieChart,
  Pie,
  Tooltip,
  BarChart,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
  Bar,
} from "recharts";
import { SimpleGrid, Box } from "@chakra-ui/react";
const DataChart = () => {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);
  const [contactus, setContactus] = useState([]);
  const [orders, setOrders] = useState([]);
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
    fetch("http://localhost:5000/contactus/details")
      .then((response) => response.json())
      .then((json) => {
        setContactus(json);
      })
      .catch((error) => {
        console.log(error);
      });
    fetch("http://localhost:5000/orders")
      .then((response) => response.json())
      .then((json) => {
        setOrders(json);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  const data = [
    { name: "Products", Count: products.length },
    { name: "Users", Count: users.length },
    { name: "Orders", Count: orders.length },
    // { name: "Payments", Count: users.length },
    { name: "Contact Us", Count: contactus.length },
  ];

  return (
    <div style={{ textAlign: "center" }}>
      <div className="mx-auto max-w-2xl lg:text-center">
        {/* <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Admin Dashboard
          </h2> */}
        <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Hey 👋 Admin Welcome Back !
        </p>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Nice to meet you again <br /> Here is your business Analytics
        </p>
      </div>
      <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-4xl">
        Our brand stats
      </p>
      <div className="App">
        <SimpleGrid pt="16px" columns={{ sm: 1, md: 2, lg: 2 }}>
          <Box>
            <PieChart width={400} height={400}>
              <Pie
                dataKey="Count"
                isAnimationActive={true}
                data={data}
                cx={200}
                cy={200}
                outerRadius={80}
                fill="#8884d8"
                label
              />
              <Tooltip />
            </PieChart>
          </Box>
          <Box>
            {" "}
            <BarChart
              style={{ marginTop: "50px" }}
              width={400}
              height={300}
              data={data}
              barSize={20}
            >
              <XAxis
                dataKey="name"
                scale="point"
                padding={{ left: 10, right: 10 }}
              />
              <YAxis />
              <Tooltip />
              <Legend />
              <CartesianGrid strokeDasharray="3 3" />
              <Bar
                dataKey="Count"
                fill="#8884d8"
                background={{ fill: "#eee" }}
              />
            </BarChart>
          </Box>
        </SimpleGrid>
      </div>
    </div>
  );
};

export default DataChart;
