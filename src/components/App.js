import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { checkLogin } from "../store/slices/authedUser";
import { getAll } from "../store/slices/products";

import styles from "../styles/app.module.css";
import Nav from "../layouts/Nav";
import Home from "../pages/Home";
import Sign from "../pages/Sign";
import Reset from "../pages/Reset";
import Cart from "../pages/Cart";
import Faq from "../pages/Faq";
import User from "../pages/User";
import AboutUs from "../pages/AboutUs";
import Settings from "../pages/Settings";
import Category from "../pages/Category";
import Product from "../pages/Product";
import Footer from "../layouts/Footer";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(checkLogin());
    dispatch(getAll());
  }, []);

  return (
    <BrowserRouter>
      <Nav />

      <div className={styles.app}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<Sign />} />
          <Route path="/sign-up" element={<Sign />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/user/:id" element={<User />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/products/:catName" element={<Category />} />
          <Route path="/product/:catName/:prodName" element={<Product />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
