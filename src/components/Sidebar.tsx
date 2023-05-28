import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="w-1/5 bg-[#131313] h-screen">
      <ul className="flex flex-col space-y-2 text-white">
        <li>
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
          <Link to="/contact-list">Contact List</Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
