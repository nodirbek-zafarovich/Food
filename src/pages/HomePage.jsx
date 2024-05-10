import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import RightSidebar from "../components/RightSidebar";
import MiddleSidebar from "../components/MiddleSidebar";

const HomePage = () => {
  const [type, setType] = useState("Dine In");
  return (
    <div className="relative flex">
      <Sidebar />
      <MiddleSidebar setType={setType} />
      <RightSidebar type={type} />
    </div>
  );
};

export default HomePage;
