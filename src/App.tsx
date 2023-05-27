import React from "react";
import ContactForm from "./components/ContactForm";
import ContactList from "./components/ContactList";

const App: React.FC = () => {
  return (
    <div>
      <h1>Add Contact</h1>
      <ContactForm />
      <h1>Contact List</h1>
      <ContactList />
    </div>
  );
};

export default App;
