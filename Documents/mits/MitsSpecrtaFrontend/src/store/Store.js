import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./CartSlice";
import productReducer from "./ProductSlice";
import AdminLoginReducer from "./AdminLoginSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    product: productReducer,
    adminlogin: AdminLoginReducer,
  },
});
export default store;
