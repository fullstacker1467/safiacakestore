import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Basic } from "./context/Basic";
import { User } from "./pages/User/User";
import { AboutPage } from "./pages/About/About";
import { Cennosti } from "./pages/Cennosti/Cennosti";
import { Error } from "./pages/Error/Error";
import { Carrier } from "./pages/Carrier/Carrier";
import { Navbar } from "./components/Navbar/Navbar";
import { Footer } from "./components/Footer/Footer";
import { Store } from "./pages/Store/Store";
import { Sweets } from "./pages/Menu/Sweets";
import { Pravpit } from "./pages/Menu/Pravpit";
import { Suv } from "./pages/Menu/Suv";
import { Polufabrikat } from "./pages/Menu/Polufabrikat";
import { Delivery } from "./pages/Menu/Delivery";
import { Products } from "./pages/Product/Products";
import { Poisk } from "./pages/Search/Poisk";
import { Bird } from "./pages/Bird/Bird";
import { Basket } from "./pages/Basket/Basket";

function App() {
  return (
    <>
      <Basic>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/user" element={<User />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/features" element={<Cennosti />} />
          <Route path="/carrier" element={<Carrier />} />
          <Route path="/menu/sweets" element={<Sweets />} />
          <Route path="/menu/pp" element={<Pravpit />} />
          <Route path="/menu/suv" element={<Suv />} />
          <Route path="/menu/polufabrikat" element={<Polufabrikat />} />
          <Route path="/menu/delivery" element={<Delivery />} />
          <Route path="/menu/product" element={<Products />} />
          <Route path="/bird" element={<Bird />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/poisk" element={<Poisk />} />
          <Route path="/store" element={<Store />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Basic>
    </>
  );
}

export default App;
