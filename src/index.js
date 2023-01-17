import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import Nav from "./component/Nav";
import Collections from "./page/Collections";
import All from "./page/All";
import Page from "./page/Page";
import Contact from "./page/Contact";
import Login from "./page/Login";
import Register from "./page/Register";
import OralCare from "./page/Oralcare";
import PersonalCare from "./page/Personalcare";
import GiftSet from "./page/GiftSets";
import Bundles from "./page/Bundles";
import Favorites from "./page/Favorites";
import Checkout from "./page/Checkout";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="/" element={<Nav />}>
          <Route path="" element={<Home />}></Route>
          <Route path="/collections" element={<Collections />}>
            <Route path="all" element={<All />} />
            <Route path="oral-care" element={<OralCare />} />
            <Route path="personal-care" element={<PersonalCare />} />
            <Route path="gift-sets" element={<GiftSet />} />
            <Route path="bundles" element={<Bundles />} />
            <Route path="favorites" element={<Favorites />} />
          </Route>
          <Route path="page" element={<Page />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />} />
          <Route path="checkout" element={<Checkout />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
