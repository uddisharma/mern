import { Fragment, useState, useEffect } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/CartSlice";
import { Link } from "react-router-dom";

export default function Cart() {
  // const products = useSelector((state) => state.cart);

  const [open, setOpen] = useState(true);
  const products = useSelector((state) => state.cart);
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const handleremove = (id) => {
    dispatch(remove(id));
  };

  var subTotal;
  console.log(products);
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-in-out duration-500"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in-out duration-500"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-500 sm:duration-700"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-500 sm:duration-700"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-md">
                  <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">
                      <div className="flex items-start justify-between">
                        <Dialog.Title className="text-lg font-medium text-gray-900">
                          Shopping cart
                        </Dialog.Title>
                        <div className="ml-3 flex h-7 items-center">
                          <button
                            type="button"
                            className="-m-2 p-2 text-gray-400 hover:text-gray-500"
                            onClick={() => setOpen(false)}
                          >
                            <span className="sr-only">Close panel</span>
                            <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                          </button>
                        </div>
                      </div>

                      <div className="mt-8">
                        <div className="flow-root">
                          <ul
                            role="list"
                            className="-my-6 divide-y divide-gray-200"
                          >
                            {products.length > 0 ? (
                              products.map((product) => (
                                <li key={product.id} className="flex py-6">
                                  <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                    <img
                                      src={product.imgUrl}
                                      alt={product.name}
                                      className="h-full w-full object-cover object-center"
                                    />
                                  </div>

                                  <div className="ml-4 flex flex-1 flex-col">
                                    <div>
                                      <div className="flex justify-between text-base font-medium text-gray-900">
                                        <h3>
                                          <Link to={`product/${product.id}`}>
                                            {product.name}
                                          </Link>
                                        </h3>
                                        <p className="ml-4">
                                          {(subTotal = count * product.rate)}
                                        </p>
                                      </div>
                                      <p className="mt-1 text-sm text-gray-500">
                                        {product.color}
                                      </p>
                                    </div>
                                    <p className="text-gray-500">Qty</p>
                                    <div className="flex flex-1 items-end justify-between text-sm">
                                      <nav
                                        className="isolate inline-flex -space-x-px rounded-md shadow-sm"
                                        aria-label="Pagination"
                                      >
                                        {count > 1 && (
                                          <p
                                            //   href="#"
                                            aria-disabled={count < 2}
                                            onClick={() => setCount(count - 1)}
                                            className="relative hidden items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0 md:inline-flex"
                                          >
                                            -
                                          </p>
                                        )}

                                        <p
                                          //   href="#"
                                          className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                        >
                                          {count}
                                        </p>
                                        <p
                                          onClick={() => setCount(count + 1)}
                                          //   href="#"
                                          className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
                                        >
                                          +
                                        </p>
                                      </nav>

                                      <div className="flex">
                                        <button
                                          onClick={() =>
                                            handleremove(product.id)
                                          }
                                          type="button"
                                          className="font-medium text-indigo-600 hover:text-indigo-500"
                                        >
                                          Remove
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </li>
                              ))
                            ) : (
                              <>
                                <h1 className="font-medium text-indigo-600 hover:text-indigo-500">
                                  Please add some products
                                </h1>
                                <img
                                  src="https://miro.medium.com/v2/resize:fit:1100/1*D-ZiKd0B00tdifaB2X3tKQ.gif"
                                  alt=""
                                />
                              </>
                            )}
                          </ul>
                        </div>
                      </div>
                    </div>
                    {products.length > 0 && (
                      <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <p>Subtotal</p>

                          <p>{subTotal}</p>
                        </div>
                        <p className="mt-0.5 text-sm text-gray-500">
                          Shipping and taxes calculated at checkout.
                        </p>
                        <div className="mt-6">
                          <Link
                            to="/address"
                            className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
                          >
                            Checkout
                          </Link>
                        </div>
                        <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                          <p>
                            or
                            <Link to="/products">
                              <button
                                type="button"
                                className="font-medium text-indigo-600 hover:text-indigo-500"
                                onClick={() => setOpen(false)}
                              >
                                Continue Shopping
                                <span aria-hidden="true"> &rarr;</span>
                              </button>
                            </Link>
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import {
//   addToCart,
//   clearCart,
//   decreaseCart,
//   getTotals,
//   removeFromCart,
// } from "../store/CartSlice";

// import { Link } from "react-router-dom";

// const Cart = () => {
//   const cart = useSelector((state) => state.cart);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(getTotals());
//   }, [cart, dispatch]);

//   const handleAddToCart = (product) => {
//     dispatch(addToCart(product));
//   };
//   const handleDecreaseCart = (product) => {
//     dispatch(decreaseCart(product));
//   };
//   const handleRemoveFromCart = (product) => {
//     dispatch(removeFromCart(product));
//   };
//   const handleClearCart = () => {
//     dispatch(clearCart());
//   };
//   return (
//     <div className="cart-container">
//       <h2>Shopping Cart</h2>
//       {cart.cartItems.length === 0 ? (
//         <div className="cart-empty">
//           <p>Your cart is currently empty</p>
//           <div className="start-shopping">
//             <Link to="/">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20"
//                 height="20"
//                 fill="currentColor"
//                 className="bi bi-arrow-left"
//                 viewBox="0 0 16 16"
//               >
//                 <path
//                   fillRule="evenodd"
//                   d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
//                 />
//               </svg>
//               <span>Start Shopping</span>
//             </Link>
//           </div>
//         </div>
//       ) : (
//         <div>
//           <div className="titles">
//             <h3 className="product-title">Product</h3>
//             <h3 className="price">Price</h3>
//             <h3 className="quantity">Quantity</h3>
//             <h3 className="total">Total</h3>
//           </div>
//           <div className="cart-items">
//             {cart.cartItems &&
//               cart.cartItems.map((cartItem) => (
//                 <div className="cart-item" key={cartItem.id}>
//                   <div className="cart-product">
//                     <img src={cartItem.imgUrl} alt={cartItem.name} />
//                     <div>
//                       <h3>{cartItem.name}</h3>
//                       <p>{cartItem.name}</p>
//                       <button onClick={() => handleRemoveFromCart(cartItem)}>
//                         Remove
//                       </button>
//                     </div>
//                   </div>
//                   <div className="cart-product-price">${cartItem.rate}</div>
//                   <div className="cart-product-quantity">
//                     <button onClick={() => handleDecreaseCart(cartItem)}>
//                       -
//                     </button>
//                     <div className="count">{cartItem.cartQuantity}</div>
//                     <button onClick={() => handleAddToCart(cartItem)}>+</button>
//                   </div>
//                   <div className="cart-product-total-price">
//                     ${cartItem.rate * cartItem.cartQuantity}
//                   </div>
//                 </div>
//               ))}
//           </div>
//           <div className="cart-summary">
//             <button className="clear-btn" onClick={() => handleClearCart()}>
//               Clear Cart
//             </button>
//             <div className="cart-checkout">
//               <div className="subtotal">
//                 <span>Subtotal</span>
//                 <span className="amount">${cart.cartTotalAmount}</span>
//               </div>
//               <p>Taxes and shipping calculated at checkout</p>
//               <button>Check out</button>
//               <div className="continue-shopping">
//                 <Link to="/">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20"
//                     height="20"
//                     fill="currentColor"
//                     className="bi bi-arrow-left"
//                     viewBox="0 0 16 16"
//                   >
//                     <path
//                       fillRule="evenodd"
//                       d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
//                     />
//                   </svg>
//                   <span>Continue Shopping</span>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Cart;
