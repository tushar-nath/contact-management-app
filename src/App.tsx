import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactList from "./components/ContactList";
import "tailwindcss/tailwind.css";
import Dashboard from "./components/Dashboard";
import { DetailPage } from "./components/Leaflet";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact-list" element={<ContactList />} />
          <Route path="/map" element={<DetailPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
