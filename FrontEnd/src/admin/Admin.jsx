import React, { useEffect, useState } from "react";
import { Link, Route, Routes } from "react-router-dom";
import SideBar from "./SideBar";
import Dashboard from "./Dashboard";
import UserManager from "./UserManager";

const Admin = ({ setUser }) => {
  useEffect(() => {
    setUser(false);

    // Khi component Admin unmount, hiển thị lại header và footer
    return () => setUser(true);
  }, [setUser]);

  const [activeTab, setActiveTab] = useState("dashboard");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <>
      <div className="wrapper">
        {/* Preloader */}
        <div className="preloader flex-column justify-content-center align-items-center">
          <img
            className="animation__shake"
            src="dist/img/AdminLTELogo.png"
            alt="AdminLTELogo"
            height={60}
            width={60}
          />
        </div>

        {/* Content Wrapper. Contains page content */}
        
        {/* <Routes>
          <Route path="/dashboard" element={<Dashboard setUser={setUser} />} />
        </Routes> */}
        {/* /.content-wrapper */}

        {/* Control Sidebar */}
        <aside className="control-sidebar control-sidebar-dark">
          {/* Control sidebar content goes here */}
        </aside>
        {/* /.control-sidebar */}
      </div>
    </>
  );
};

export default Admin;
