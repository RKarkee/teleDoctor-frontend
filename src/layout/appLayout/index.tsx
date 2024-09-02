import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../header";
import Footer from "../footer";

const AppLayout: React.FC = () => {
  return (
    <div className="relative  p-0 min-h-[96vh]">
      <Header />
      <div className="container mx-auto p-4 mt-4 lg:mt-4">
        <Outlet />
      </div>
      <div className="absolute bottom-0 w-full">
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
