import React from "react";
import ContactList from "./components/ContactList";
import "tailwindcss/tailwind.css";

const App: React.FC = () => {
  return (
    <div>
      <h1>Contact List</h1>
      <ContactList />
    </div>
  );
};

export default App;
