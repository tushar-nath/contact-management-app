import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartBar, faAddressBook } from "@fortawesome/free-solid-svg-icons";

const Sidebar: React.FC = () => {
  return (
    <div className="w-1/5 bg-[#131313] h-screen flex flex-col">
      <div className="py-4 px-2 text-white text-center fixed w-1/5 mt-8">
        <h1 className="text-2xl font-bold">Management App</h1>
      </div>
      <div className="overflow-y-auto mt-28">
        <ul className="text-white text-center">
          <li className="my-6 text-xl">
            <Link to="/dashboard" className="flex items-center justify-center">
              <FontAwesomeIcon icon={faChartBar} className="mr-2 mb-1" />
              Dashboard
            </Link>
          </li>
          <li className="my-6 text-xl">
            <Link
              to="/contact-list"
              className="flex items-center justify-center"
            >
              <FontAwesomeIcon icon={faAddressBook} className="mr-2 mb-1" />
              Contact List
            </Link>
          </li>
          {/* Add more menu items here */}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
