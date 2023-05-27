import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../types";

export interface Contact {
  id: number;
  name: string;
  email: string;
}

export interface ContactState {
  contacts: Contact[];
}

export const initialState: ContactState = {
  contacts: [],
};

const contactSlice = createSlice({
  name: "contacts",
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    deleteContact: (state, action: PayloadAction<number>) => {
      state.contacts = state.contacts.filter(
        (contact) => contact.id !== action.payload
      );
    },
    // Add additional reducer for updating a contact
    updateContact: (state, action: PayloadAction<Contact>) => {
      const { id, name, email } = action.payload;
      const contactToUpdate = state.contacts.find(
        (contact) => contact.id === id
      );
      if (contactToUpdate) {
        contactToUpdate.name = name;
        contactToUpdate.email = email;
      }
    },
  },
});

export const { addContact, deleteContact, updateContact } =
  contactSlice.actions;

export const selectContacts = (state: RootState) => state.contacts.contacts;

export default contactSlice.reducer;
