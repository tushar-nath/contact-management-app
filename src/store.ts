import { configureStore } from "@reduxjs/toolkit";
import contactReducer from "./reducers/contactReducer";

const store = configureStore({
  reducer: {
    contacts: contactReducer,
  },
});

export default store;
