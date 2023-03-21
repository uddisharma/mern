import { useAuth0 } from "@auth0/auth0-react";
import { useToast, Textarea } from "@chakra-ui/react";
import { useState } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
export default function Buy() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  const toast = useToast();

  const products = useSelector((state) => state.cart);
  const prods = JSON.stringify(products);
  console.log(products);

  const [orderDet, setOrderDet] = useState({
    firstname: "",
    lastname: "",
    phone: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zip: "",
    order: prods,
  });
  const { firstname, lastname, phone, email, street, city, state, zip, order } =
    orderDet;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrderDet({ ...orderDet, [name]: value });
  };

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
      toast({
        title: "Transaction failed",
        description: "Transaction failed",
        status: "failure",
        duration: 3000,
        isClosable: true,
      });
      return;
    }
    const options = {
      key: "rzp_test_1ZKrAXvsXDbLn3",
      currency: "INR",
      amount: amount * 100,
      name: "MITS Spectra",
      description: "thanks for purchase",
      image:
        "https://res.cloudinary.com/dvuphar2o/image/upload/v1679116392/ak5a3rzzdsls1wvzg1qb.png",
      handler: function (res) {
        // alert(res.razorpay_payment_id);
        // alert("Payment Successful");
        localStorage.setItem("razorpay_payment_id", res.razorpay_payment_id);
        toast({
          title: "Payment Successfull Successfully.",
          description: "Now your order is placed",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
        <Navigate to="/" />;
      },
      prefill: {
        name: "Deepak",
      },
    };
    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };
  const razorpayId = localStorage.getItem("razorpay_payment_id");
  var subTotal;
  const handleSubmit = (e) => {
    console.log(orderDet);
    e.preventDefault();
    axios
      .post("http://localhost:5000/addorder", orderDet)
      .then((res) => {
        console.log(res);

        toast({
          title: "order comfirmed",
          description: "Your order ahs been confirmed",
          status: "success",
          duration: 3000,
          isClosable: true,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>

      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-3 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0">
              {/* <h3 className="text-base font-semibold leading-6 text-gray-900">
                Personal Information
              </h3>
              <p className="mt-1 text-sm text-gray-600">
                Use a permanent address where you can receive mail.
              </p> */}
              <img
                src="https://images.pexels.com/photos/5025517/pexels-photo-5025517.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt=""
              />
            </div>
          </div>
          <div className="mt-5 md:col-span-2 md:mt-0">
            <form onSubmit={handleSubmit}>
              <div className="overflow-hidden shadow sm:rounded-md">
                <div className="bg-white px-4 py-5 sm:p-6">
                  <div className="grid grid-cols-6 gap-6">
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="first-name"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        First name
                      </label>
                      <input
                        type="text"
                        name="firstname"
                        id="first-name"
                        value={firstname}
                        onChange={handleChange}
                        defaultValue={user.given_name}
                        autoComplete="given-name"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="lastname"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Last name
                      </label>
                      <input
                        type="text"
                        name="lastname"
                        id="last-name"
                        value={lastname}
                        onChange={handleChange}
                        defaultValue={user.family_name}
                        autoComplete="family-name"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="phone-number"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Phone Number
                      </label>
                      <input
                        type="number"
                        name="phone"
                        id="phone-number"
                        value={phone}
                        onChange={handleChange}
                        defaultValue={user.mobile}
                        autoComplete="given-number-number"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        id="email-address"
                        defaultValue={user.email}
                        autoComplete="given-email-address"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-6">
                      <label
                        htmlFor="street"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Street address
                      </label>
                      <input
                        type="text"
                        name="street"
                        id="street-address"
                        value={street}
                        onChange={handleChange}
                        autoComplete="street-address"
                        defaultValue={user.address}
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                      <label
                        htmlFor="city"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        City
                      </label>
                      <input
                        type="text"
                        name="city"
                        value={city}
                        onChange={handleChange}
                        id="city"
                        defaultValue={user.address}
                        autoComplete="address-level2"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="region"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        State / Province
                      </label>
                      <input
                        type="text"
                        name="state"
                        id="region"
                        value={state}
                        onChange={handleChange}
                        defaultValue={user.address}
                        autoComplete="address-level1"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>

                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        ZIP / Postal code
                      </label>
                      <input
                        type="number"
                        name="zip"
                        id="postal-code"
                        value={zip}
                        onChange={handleChange}
                        autoComplete="postal-code"
                        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                      />
                    </div>
                    <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                      <label
                        htmlFor="postal-code"
                        className="block text-sm font-medium leading-6 text-gray-900"
                      >
                        Your Order Details
                      </label>
                      {/* <textarea
                        className="mt-2 block rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                        id="story"
                        name="order"
                        rows="5"
                        cols="90"
                        readOnly
                        
                        value={prods.name}
                      /> */}
                      {/* {products.map((e) => {
                        <>
                          <input
                            type="text"
                            name="order"
                            id="order"
                            value={order}
                            onChange={handleChange}
                            autoComplete="postal-code"
                            defaultValue={e}
                            className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                          />
                        </>;
                      })} */}
                      {products.length > 0 &&
                        products.map((product) => (
                          <li key={product.id} className=" py-6">
                            <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                              <img
                                src={product.imgUrl}
                                alt={(subTotal = product.rate)}
                                className="h-full w-full object-cover object-center"
                              />
                              <h2
                                style={{ border: "2px solid red" }}
                                className="block text-sm font-medium leading-6 text-gray-900"
                              >
                                {product.name}
                              </h2>
                            </div>
                          </li>
                        ))}
                    </div>
                  </div>
                </div>
                <div style={{ display: "flex", justifyContent: "right" }}>
                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                      onClick={() => makePayment(subTotal)}
                      className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Pay {subTotal} before confirm
                    </button>
                  </div>
                  <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
                    <button
                      type="submit"
                      className="inline-flex justify-center rounded-md bg-indigo-600 py-2 px-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
                    >
                      Confirm Order
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="hidden sm:block" aria-hidden="true">
        <div className="py-5">
          <div className="border-t border-gray-200" />
        </div>
      </div>
    </>
  );
}
