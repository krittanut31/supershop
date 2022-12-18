import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./page/Home";
import Nav from "./component/Nav";
import Collections from "./page/Collections";
import Clothes from "./page/Clothes";
import Coat from "./page/Coat";
import Jacket from "./page/Jacket";
import Uniform from "./page/Uniform";
import Shirt from "./page/Shirt";
import TShirt from "./page/TShirt";
import Sweater from "./page/Sweater";
import All from "./page/All";
import Page from "./page/Page";
import Contact from "./page/Contact";
import Login from "./page/Login";
import Register from "./page/Register";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route index element={<App />} />
        <Route path="#" element={<Nav />}></Route>
        <Route path="" element={<Home />}>
          <Route path="/collections" element={<Collections />}>
            <Route path="/collections" element={<Collections />} />
            <Route path="all" element={<All />} />
            <Route path="clothes" element={<Clothes />} />
            <Route path="coat" element={<Coat />} />
            <Route path="jacket" element={<Jacket />} />
            <Route path="uniform" element={<Uniform />} />
            <Route path="shirt" element={<Shirt />} />
            <Route path="t-shirt" element={<TShirt />} />
            <Route path="sweater" element={<Sweater />} />
          </Route>
          <Route path="page" element={<Page />}></Route>
          <Route path="contact" element={<Contact />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
