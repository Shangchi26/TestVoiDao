import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Login from "./auth/Login";
import Register from "./auth/Register";
import Product from "./pages/Product";
import Profile from "./pages/Profile";
import Admin from "./admin/Admin";
import SideBar from "./admin/SideBar";
import UserManager from "./admin/UserManager";
import Dashboard from "./admin/Dashboard";
import About from "./pages/About";

function App() {
  
  const [user, setUser] = useState(true)

  return (
    <>
      <BrowserRouter>
        {user && <Header />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/profile" element={<Profile />} />
          {/* <Route
            path="/admin"
            element={
              // Wrap Sidebar và các route con trong thẻ React Fragment để hiển thị chúng cùng lúc
              <>
                <SideBar />
                <Routes>
                  <Route path="/" element={<Admin setUser={setUser} />} />
                  <Route path="/usermamager" element={<UserManager setUser={setUser} />} />
                </Routes>
              </>
            }
          /> */}
        </Routes>
        {user && <Footer />}
      </BrowserRouter>
    </>
  );
}

export default App;
