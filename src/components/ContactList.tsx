import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectContacts,
  deleteContact,
  updateContact,
} from "../reducers/contactReducer";

interface Contact {
  id: number;
  name: string;
  email: string;
}

const ContactList: React.FC = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const [selectedContact, setSelectedContact] = useState<Contact | null>(null);
  const [editedContact, setEditedContact] = useState<Contact | null>(null);

  const handleViewDetails = (contact: Contact) => {
    setSelectedContact(contact);
  };

  const handleEditContact = (contact: Contact) => {
    setEditedContact(contact);
  };

  const handleDeleteContact = (contact: Contact) => {
    dispatch(deleteContact(contact.id));
  };

  const handleSaveContact = () => {
    if (editedContact) {
      dispatch(updateContact(editedContact));
      setEditedContact(null);
    }
  };

  return (
    <div>
      <ul>
        {contacts.map((contact: Contact) => (
          <li key={contact.id}>
            <strong>Name:</strong> {contact.name}, <strong>Email:</strong>{" "}
            {contact.email}
            <button onClick={() => handleViewDetails(contact)}>
              View Details
            </button>
            <button onClick={() => handleEditContact(contact)}>Edit</button>
            <button onClick={() => handleDeleteContact(contact)}>Delete</button>
          </li>
        ))}
      </ul>

      {selectedContact && (
        <div>
          <h2>Contact Details</h2>
          <p>
            <strong>Name:</strong> {selectedContact.name}
          </p>
          <p>
            <strong>Email:</strong> {selectedContact.email}
          </p>
          <button onClick={() => setSelectedContact(null)}>Close</button>
        </div>
      )}

      {editedContact && (
        <div>
          <h2>Edit Contact</h2>
          <input
            type="text"
            value={editedContact.name}
            onChange={(e) =>
              setEditedContact({ ...editedContact, name: e.target.value })
            }
          />
          <input
            type="email"
            value={editedContact.email}
            onChange={(e) =>
              setEditedContact({ ...editedContact, email: e.target.value })
            }
          />
          <button onClick={handleSaveContact}>Save</button>
        </div>
      )}
    </div>
  );
};

export default ContactList;
