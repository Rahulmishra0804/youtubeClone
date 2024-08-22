import React from "react";
import Sidebar from "./Sidebar";

import { Outlet } from "react-router-dom";

const Body = () => {
  return (
    <div className="flex gap-16 space-y-3 w-full h-full bg-[#F2EFE5] ">
      <Sidebar />
      <Outlet />
    </div>
  );
};

export default Body;
