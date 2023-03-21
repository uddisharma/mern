import Home from "./Pages/Home.js";
import Products from "./Pages/Products.js";
import About from "./Pages/About.js";
import AllRoutes from "./Routes/AllRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer.js";
import { useSelector } from "react-redux";
function App() {
  const adminLogin = useSelector((state) => state.adminlogin);
  const token = localStorage.getItem("token");
  return (
    <div>
      <div
        style={{
          display: adminLogin.IsLogin == true ? "none" : "block",
          display: token ? "none" : "block",
        }}
      >
        <Navbar />
      </div>
      <AllRoutes />
      <div
        style={{
          display: adminLogin.IsLogin == true ? "none" : "block",
          display: token ? "none" : "block",
        }}
      >
        <Footer />
      </div>
    </div>
  );
}

export default App;
