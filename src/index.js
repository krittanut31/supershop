import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import Home from "./page/Home";
import Nav from "./component/Nav";
import Collections from "./page/Collections";
import All from "./page/product/All";
import Page from "./page/Page";
import Contact from "./page/Contact";
import Login from "./page/Login";
import Register from "./page/Register";
import OralCare from "./page/product/Oralcare";
import PersonalCare from "./page/product/Personalcare";
import Bundles from "./page/product/Bundles";
import GiftSet from "./page/product/GiftSets";
import Favorites from "./page/product/Favorites";
import Checkout from "./page/Checkout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            <Route index element={<App />}>
              {/* <Route path="" element={<Home />} /> */}
              <Route path="collections" element={<Collections />}>
                <Route path="all" element={<All />} />
                <Route path="oral-care" element={<OralCare />} />
                <Route path="personal-care" element={<PersonalCare />} />
                <Route path="gift-sets" element={<GiftSet />} />
                <Route path="bundles" element={<Bundles />} />
                <Route path="favorites" element={<Favorites />} />
              </Route>
              <Route path="page" element={<Page />}></Route>
              <Route path="contact" element={<Contact />} />
              <Route path="login" element={<Login />}></Route>
              <Route path="register" element={<Register />} />
              <Route path="checkout" element={<Checkout />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
