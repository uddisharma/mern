import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home.js";
import Products from "../Pages/Products.js";
import About from "../Pages/About.js";
import Acne from "../Pages/Acne.js";
import Contact from "../components/Contact.js";
import Alopecia from "../Pages/Alopecia.js";
import Eczema from "../Pages/Eczema.js";
import Psariasis from "../Pages/Psariasis.js";
import Raynaud from "../Pages/Raynaud.js";
import Rosacea from "../Pages/Rosacea.js";
import SkinCancer from "../Pages/SkinCancer.js";
import Vitiligo from "../Pages/Vitiligo.js";
import Actinic from "../Pages/Actinic.js";
import Argyria from "../Pages/Argyria.js";
import Chromhidrosis from "../Pages/Chromhidrosis .js";
import Epidermolysis from "../Pages/Epidermolysis.js";
import Harlequin from "../Pages/Harlequin.js";
import Lamellar from "../Pages/Lamellar .js";
import Necroboisis from "../Pages/Necrobiosis.js";
import Pcd from "../Pages/Pcd.js";
import Contract from "../Pages/Contract.js";
import NotFound from "../Pages/NotFound.js";
import SingleProduct from "../Pages/SingleProduct.js";
import Cart from "../Pages/Cart.js";
import Buy from "../Pages/Buy.js";
import FaceWash from "../Pages/FaceWash.js";
import Creams from "../Pages/Creams.js";
import Tablets from "../Pages/Tablets.js";
import PrivateRoute from "../Private/PrivateRoute.js";
import Login from "../Pages/Login.js";
import Profile from "../Pages/Profile.js";
import AdminLogin from "../Admin/AdminLogin.js";
import AddProduct from "../Admin/Components/AddProduct.js";
import Dashborad from "../Admin/AdminDashboard/Dashboard.js";
import DashboardList from "../Admin/AdminDashboard/DashboardList.js";
import Removeproduct from "../Admin/AdminDashboard/RemoveProduct.js";
import UpdateProduct from "../Admin/AdminDashboard/Updateproducts.js";
import DashAddProduct from "../Admin/AdminDashboard/DashAddProduct.js";
import UserList from "../Admin/AdminDashboard/UserList.js";
import ReadyforUpdate from "../Admin/AdminDashboard/ReadyforUpdate.js";
import ContactUsDetails from "../Admin/AdminDashboard/Contact.js";
import OrderList from "../Admin/AdminDashboard/OrdeList.js";
import YourOrders from "../Pages/yourOrder.js";
import UpdateOrderStatus from "../Admin/AdminDashboard/UpdateOrderStatus.js";
const AllRoutes = () => {
  return (
    <div>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/acne" element={<Acne />} />
          <Route path="/alopecia" element={<Alopecia />} />
          <Route path="/eczema" element={<Eczema />} />
          <Route path="/psariasis" element={<Psariasis />} />
          <Route path="/raynaud-syndrome" element={<Raynaud />} />
          <Route path="/rosacea" element={<Rosacea />} />
          <Route path="/skin-cancer" element={<SkinCancer />} />
          <Route path="/vitiligo" element={<Vitiligo />} />
          <Route path="/actinic" element={<Actinic />} />
          <Route path="/argyria" element={<Argyria />} />
          <Route path="/chromhidrosis" element={<Chromhidrosis />} />
          <Route path="/epidermolysis" element={<Epidermolysis />} />
          <Route path="/harlequin" element={<Harlequin />} />
          <Route path="/lamellar" element={<Lamellar />} />
          <Route path="/necroboisis" element={<Necroboisis />} />
          <Route path="/service/pcd" element={<Pcd />} />
          <Route path="/service/contract" element={<Contract />} />
          <Route path="/product/:_id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/address" element={<Buy />} />
          <Route path="/notfound" element={<NotFound />} />
          <Route path="/facewash&soap" element={<FaceWash />} />
          <Route path="/creams&lotion" element={<Creams />} />
          <Route path="/tablets&capsules" element={<Tablets />} />
          <Route path="/login" element={<Login />} />
          <Route path="/user/profile" element={<Profile />} />
          <Route path="/user/orders" element={<YourOrders />} />

          {/* Admin */}
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<Dashborad />} />
          <Route path="/admin/product-list" element={<DashboardList />} />
          <Route path="/admin/remove-product" element={<Removeproduct />} />
          <Route path="/admin/update-product" element={<UpdateProduct />} />
          <Route path="/admin/add-product" element={<DashAddProduct />} />
          <Route path="/admin/user-list" element={<UserList />} />
          <Route
            path="/admin/update-product/:id"
            element={<ReadyforUpdate />}
          />
          <Route
            path="/admin/contactus/details"
            element={<ContactUsDetails />}
          />
          <Route path="/admin/order-list" element={<OrderList />} />
          <Route
            path="/admin/updateOrderStatus/:id"
            element={<UpdateOrderStatus />}
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </>
    </div>
  );
};
export default AllRoutes;
