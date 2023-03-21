import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ChakraProvider } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import store from "./store/Store.js";
import Context from "./Context/Context";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <Auth0Provider
      domain="dev-ad6goslkxzeg4e56.us.auth0.com"
      clientId="zlMSay0eHDefZQcKZ6cckYidGNBHcjDY"
      authorizationParams={{
        redirect_uri: window.location.origin,
      }}
    >
      <BrowserRouter>
        {/* <Context> */}
        <ChakraProvider>
          <App />
        </ChakraProvider>
        {/* </Context> */}
      </BrowserRouter>
    </Auth0Provider>
  </Provider>
);

reportWebVitals();
