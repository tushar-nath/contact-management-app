import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  selectContacts,
  deleteContact,
  updateContact,
  addContact,
} from "../reducers/contactReducer";
import Modal from "react-modal";

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
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [newContact, setNewContact] = useState<Contact>({
    id: 0,
    name: "",
    email: "",
  });

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

  const handleCreateContact = () => {
    setShowCreateModal(true);
  };

  const handleCloseCreateModal = () => {
    setShowCreateModal(false);
  };

  const handleAddContact = () => {
    if (newContact.name && newContact.email) {
      dispatch(addContact(newContact));
      setNewContact({ id: 0, name: "", email: "" });
      setShowCreateModal(false);
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

      <button onClick={handleCreateContact}>Create Contact</button>

      <Modal isOpen={showCreateModal} onRequestClose={handleCloseCreateModal}>
        <h2>Create Contact</h2>
        <input
          type="text"
          placeholder="Name"
          value={newContact.name}
          onChange={(e) =>
            setNewContact({ ...newContact, name: e.target.value })
          }
        />
        <input
          type="email"
          placeholder="Email"
          value={newContact.email}
          onChange={(e) =>
            setNewContact({ ...newContact, email: e.target.value })
          }
        />
        <button onClick={handleAddContact}>Add Contact</button>
        <button onClick={handleCloseCreateModal}>Cancel</button>
      </Modal>
    </div>
  );
};

export default ContactList;
