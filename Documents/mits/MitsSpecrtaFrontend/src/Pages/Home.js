import React, { useState, useEffect } from "react";
import cookie from "react-cookies";
import Navbar from "../components/Navbar.js";
import Hero from "../components/Hero.js";
import Contact from "../components/Contact";
import Footer from "../components/Footer.js";
import Products from "./Products.js";
import Carausal from "../components/Carausal.js";
import AboutUs from "../components/AboutUs.js";
import Trending from "../components/Trending.js";
import CookieConsent from "react-cookie-consent";
import Cookies from "js-cookie";
const Home = () => {
  const [count, setCount] = useState(0);
  const handleaccpect = () => {
    Cookies.set("accpect", "cookieAppected", { expires: 1 });
    setCount(count + 1);
  };
  useEffect(() => {
    const cookie = Cookies.get("accpect");
  }, []);
  console.log(count);
  return (
    <div>
      <Carausal />
      <Trending />
      <AboutUs />
      <Contact />
      {/* {!cookie && ( */}
      <CookieConsent
        onAccept={handleaccpect}
        enableDeclineButton
        flipButtons
        debug={true}
      >
        We use cookies to improve user experience. Choose what cookies you allow
        us to use. You can read more about our Cookie Policy in our Privacy
        policy
      </CookieConsent>
      {/* )} */}
    </div>
  );
};
export default Home;
