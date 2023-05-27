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
    console.log(contact);
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

  const contacts = useSelector(selectContacts);

  const maxId = Math.max(...contacts.map((contact) => contact.id), 0);

  const handleAddContact = () => {
    if (newContact.name && newContact.email) {
      const newContactWithId = {
        ...newContact,
        id: maxId + 1,
      };
      dispatch(addContact(newContactWithId));
      setNewContact({ id: 0, name: "", email: "" });
      setShowCreateModal(false);
    }
  };

  return (
    <div className="bg-off-white p-4">
      <ul>
        {contacts.map((contact: Contact) => (
          <li className="mt-4 p-4 bg-slate-100 rounded shadow" key={contact.id}>
            <h2 className="text-xl font-bold">{contact.name}</h2>
            <p className="text-gray-800">
              <strong>Email:</strong> {contact.email}
            </p>
            <button
              className="mt-2 bg-blue-700 text-white py-2 mr-2 px-4 rounded"
              onClick={() => handleViewDetails(contact)}
            >
              View Details
            </button>
            <button
              className="mt-2 bg-green-700 text-white py-2 mx-2 px-4 rounded"
              onClick={() => handleEditContact(contact)}
            >
              Edit
            </button>
            <button
              className="mt-2 bg-red-500 text-white py-2 mx-2 px-4 rounded"
              onClick={() => handleDeleteContact(contact)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      {selectedContact && (
        <div className="mt-4 p-4 bg-white rounded shadow">
          <h2 className="text-xl font-bold">Contact Details</h2>
          <p className="text-gray-800">
            <strong>Name:</strong> {selectedContact.name}
          </p>
          <p className="text-gray-800">
            <strong>Email:</strong> {selectedContact.email}
          </p>
          <button
            className="mt-2 bg-blue-500 text-white py-2 px-4 rounded"
            onClick={() => setSelectedContact(null)}
          >
            Close
          </button>
        </div>
      )}

      {editedContact && (
        <div className="mt-4 p-4 bg-white rounded shadow">
          <h2>Edit Contact</h2>
          <input
            className="mb-2 p-1 border rounded"
            type="text"
            value={editedContact.name}
            onChange={(e) =>
              setEditedContact({ ...editedContact, name: e.target.value })
            }
          />
          <input
            className="mb-2 p-1 border rounded"
            type="email"
            value={editedContact.email}
            onChange={(e) =>
              setEditedContact({ ...editedContact, email: e.target.value })
            }
          />
          <button
            className="mt-2 bg-blue-700 text-white py-2 mx-2 px-4 rounded"
            onClick={handleSaveContact}
          >
            Save
          </button>
        </div>
      )}

      <button
        className="mt-4 bg-blue-700 text-white py-2 px-4 rounded mx-auto block"
        onClick={handleCreateContact}
      >
        Create Contact
      </button>
      <Modal
        isOpen={showCreateModal}
        onRequestClose={handleCloseCreateModal}
        className="w-64 sm:w-96 bg-slate-100 rounded p-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg"
      >
        <h2 className="text-lg font-bold mb-2 text-center">Create Contact</h2>
        <input
          className="mb-2 p-1 border rounded mx-auto w-full"
          type="text"
          placeholder="Name"
          value={newContact.name}
          onChange={(e) =>
            setNewContact({ ...newContact, name: e.target.value })
          }
        />
        <input
          className="mb-2 p-1 border rounded mx-auto w-full"
          type="email"
          placeholder="Email"
          value={newContact.email}
          onChange={(e) =>
            setNewContact({ ...newContact, email: e.target.value })
          }
        />
        <div className="flex justify-center">
          <button
            className="mr-2 bg-green-500 text-white py-2 px-4 rounded"
            onClick={handleAddContact}
          >
            Add Contact
          </button>
          <button
            className="bg-red-500 text-white py-2 px-4 rounded"
            onClick={handleCloseCreateModal}
          >
            Cancel
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default ContactList;
