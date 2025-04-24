import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  return (
    <div>
      {/* when About, or any other nav component is selected, it will refer to or open the Root Layout component and display the navbar, then it will write the above component in the outlet component. and will be displayed on /about's path. */}
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
};

export default RootLayout;
