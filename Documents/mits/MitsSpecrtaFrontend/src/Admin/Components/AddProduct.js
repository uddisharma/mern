import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import { Box, SimpleGrid, Select } from "@chakra-ui/react";
import axios from "axios";
import { useToast } from "@chakra-ui/react";
import { Navigate } from "react-router-dom";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AddProduct() {
  const [agreed, setAgreed] = useState(false);
  const toast = useToast();
  const [formvalue, setFormValue] = useState({
    name: "",
    weight: "",
    particular: "",
    composition: "",
    mrp: "",
    rate: "",
    imgUrl: "",
  });
  const { name, weight, particular, composition, mrp, rate, imgUrl } =
    formvalue;

  const onUploadImage = (file) => {
    // console.log("file", file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "mivjmkcg");
    axios
      .post("https://api.cloudinary.com/v1_1/dvuphar2o/image/upload", formData)
      .then((res) => {
        // alert("Image Uploaded Successfully");
        // <Navigate to="/admin/product-list" />;
        toast({
          title: "Image Uploaded Successfully.",
          description: "Your file has been uploaded",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setFormValue({ ...formData, imgUrl: res.data.url });
        console.log(res.data.url);
        // console.log(formvalue)
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formvalue, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formvalue);
    axios
      .post("http://localhost:5000/create-product", formvalue)
      .then((res) => {
        console.log(res);
        toast({
          title: "Product Uploaded Successfully",
          description: "",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err);
        toast({
          title: "Uploading Failed.",
          description: "sorry ,something went wrong",
          status: "failed",
          duration: 3000,
          isClosable: true,
        });
      });
  };
  return (
    <div className="w-[90%] m-auto pt-5 pb-20">
      <h1 className="font text-4xl pb-10 text-center font-bold tracking-tight text-indigo-900 sm:text-6xl">
        Add Product
      </h1>

      <Box>
        <form
          onSubmit={handleSubmit}
          className="mx-auto  mt-16 max-w-xl sm:mt-20"
        >
          <div className="grid grid-cols-1 gap-y-6 gap-x-8 sm:grid-cols-2">
            <div className="sm:col-span-2">
              <label
                htmlFor="image"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Image
              </label>
              <div className="mt-2.5">
                <input
                  onChange={(e) => onUploadImage(e.target.files[0])}
                  type="file"
                  name="imgUrl"
                  id="imgUrl"
                  // value={imgUrl}
                  // autoComplete="organization"
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="product-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Product Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  value={name}
                  onChange={handleChange}
                  name="name"
                  id="product-name"
                  // autoComplete="given-name"
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="weight"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Product Weight
              </label>
              <div className="mt-2.5">
                <input
                  type="number"
                  name="weight"
                  id="weight"
                  value={weight}
                  onChange={handleChange}
                  // autoComplete="family-name"
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="particular"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                particular Category
              </label>
              <div className="mt-2.5">
                <Select
                  name="particular"
                  value={particular}
                  onChange={handleChange}
                  placeholder="Select Category"
                >
                  <option value="Face Wash">Face Wash</option>
                  <option value="Soap">Soap</option>
                  <option value="Cream">Cream</option>
                  <option value="Oil">Oil</option>
                  <option value="Shampoo">Shampoo</option>
                  <option value="Injection">Injection</option>
                  <option value="Dusting Powder">Dusting Powder</option>
                  <option value="Tablets">Tablets</option>
                  <option value="Capsules">Capsules</option>
                  <option value="Ointment">Ointment</option>
                  <option value="Lotion">Lotion</option>
                </Select>
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="composition"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Composition
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="composition"
                  id="composition"
                  // autoComplete="email"
                  value={composition}
                  onChange={handleChange}
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="mrp"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                MRP
              </label>
              <div className="mt-2.5">
                <input
                  type="number"
                  name="mrp"
                  id="mrp"
                  value={mrp}
                  onChange={handleChange}
                  // autoComplete="organization"
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="rate"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Rate
              </label>
              <div className="mt-2.5">
                <input
                  type="number"
                  name="rate"
                  id="rate"
                  value={rate}
                  onChange={handleChange}
                  // autoComplete="organization"
                  className="block w-full rounded-md border-0 py-2 px-3.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
          <div className="mt-10">
            <button
              //   onClick={() => makePayment(500)}
              type="submit"
              className="block w-full rounded-md bg-[#4299e1] px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Add Product
            </button>
          </div>
        </form>
      </Box>
      {/* </SimpleGrid> */}
    </div>
  );
}
