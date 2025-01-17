import "./App.css";
import NavBar from "./Header/Header";
import Main from "./main/main";
import Footer from "./footer/Footer";
import SingUp from "./singUp/singUp";
import AboutUs from "./About_us/About_us";
import ContactUs from "./Contact_us/Contact_us";  
import BookCatalog from "./book_catalog/book_catalog";
import axios from "axios";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/BookCatalog" element={<BookCatalog />} />
          <Route path="/" element={<Main />} />
          <Route path="/Aboutus" element={<AboutUs />} />
          <Route path="/Contactus" element={<ContactUs />} />
          <Route path="/singup" element={<SingUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
