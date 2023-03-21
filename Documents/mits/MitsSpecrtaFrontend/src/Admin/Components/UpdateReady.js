import { useState, useEffect } from "react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import { Switch } from "@headlessui/react";
import { Navigate, useParams } from "react-router-dom";
import { Box, SimpleGrid, Select } from "@chakra-ui/react";
import Loading from "../../Pages/Loading";
import Error from "../../Pages/Error";
import { useToast } from "@chakra-ui/react";
import axios from "axios";
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function UpdateReady() {
  const [agreed, setAgreed] = useState(false);
  const [Product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
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
  const { id } = useParams();
  useEffect(() => {
    setLoading(true);
    fetch(`http://localhost:5000/product/${id}`)
      .then((response) => response.json())
      .then((json) => {
        setProduct(json.products);
        setLoading(false);
      })
      .catch((error) => {
        setError(true);
        console.log(error);
      });
  }, []);
  // console.log(Product);
  const loadScript = (src) => {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };
  const makePayment = async (amount) => {
    const res = await loadScript(
      "https://checkout.razorpay.com/v1/checkout.js"
    );
    if (!res) {
      alert("You are offline  failed to load razorpay");
      return;
    }
    const options = {
      key: "",
      currency: "INR",
      amount: amount * 100,
      name: "MITS Spectra",
      description: "thanks for purchase",
      image:
        "https://scontent.cdninstagram.com/v/t51.39111-15/335677439_1250718129176811_2161255537823309852_n.jpg?stp=dst-jpg_s240x240&_nc_cat=106&ccb=1-7&_nc_sid=5a057b&_nc_ohc=uXgxb4lLYyMAX_4ZEbX&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=02_AVCCJ0tKEfa4CFgfpwh_ZBjnB_j3xK_4NGR92mTlm5fWpg&oe=64175D21&ig_cache_key=MzA1OTUwNDU1NTgxNzE4ODMxNQ%3D%3D.2-ccb7-5",
      handler: function (res) {
        alert(res.razorpay_payment_id);
        alert("Payment Successful");
      },
      prefill: {
        name: "Deepak",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const onUploadImage = (file) => {
    // console.log("file", file);
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "mivjmkcg");
    axios
      .post("https://api.cloudinary.com/v1_1/dvuphar2o/image/upload", formData)
      .then((res) => {
        // alert("Image Uploaded Successfully");
        <Navigate to="/admin/product-list" />;
        toast({
          title: "Image Uploaded Successfully.",
          description: "Your file has been Updated",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        setFormValue({ ...formData, imgUrl: res.data.url });
        // console.log(res.data.url);
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
      .put(`http://localhost:5000/product/update/${id}`, formvalue)
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
          title: "Updating Failed.",
          description: "Sorry ,something went wrong",
          status: "failed",
          duration: 3000,
          isClosable: true,
        });
      });
  };
  if (loading) {
    return <Loading />;
  } else if (error) {
    return <Error />;
  } else {
    return (
      <div className="w-[90%] m-auto pt-5 pb-20">
        <h1 className="font text-4xl pb-10 text-center font-bold tracking-tight text-indigo-900 sm:text-6xl">
          Update Product
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
                    type="file"
                    name="imgUrl"
                    onChange={(e) => onUploadImage(e.target.files[0])}
                    id="imgUrl"
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
                    name="name"
                    id="product-name"
                    value={name}
                    onChange={handleChange}
                    defaultValue={Product.name}
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
                    defaultValue={Product.weight}
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
                    defaultValue={Product.particular}
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
                    value={composition}
                    onChange={handleChange}
                    defaultValue={Product.composition}
                    // autoComplete="email"
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
                    defaultValue={Product.mrp}
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
                    defaultValue={Product.rate}
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
                Update Product
              </button>
            </div>
          </form>
        </Box>
        {/* </SimpleGrid> */}
      </div>
    );
  }
}
