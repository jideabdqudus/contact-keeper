import React, { useReducer } from "react";
import uuid from "uuid";
import ContactContext from "./ContactContext";
import contactReducer from "./ContactReducer";

import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from "../Types";

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: "Jill Johnson",
        email: "jill@gmail.com",
        phone: "111-111-111-1",
        type: "personal",
      },
      {
        id: 2,
        name: "Alphonso Suarez",
        email: "alphones@gmail.com",
        phone: "222-222-111-1",
        type: "personal",
      },
      {
        id: 3,
        name: "Bill gates",
        email: "billintion@gmail.com",
        phone: "333-333-111-1",
        type: "professional",
      },
    ],
    current: null,
  };

  const [state, dispatch] = useReducer(contactReducer, initialState);

  //Add Contact
  const addContact = (contact) => {
    contact.id = 4;
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  //Delete Contact
  const deleteContact = (id) => {
    dispatch({ type: DELETE_CONTACT, payload: id });
  };

  //Set Current Contact
  const setCurrent = (contact) => {
    dispatch({ type: SET_CURRENT, payload: contact });
  };
  //Clear Current Contact
  const clearCurrent = () => {
    dispatch({ type: CLEAR_CURRENT});
  };
  //Update Contact

  //Filter Contacts

  //Clear Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        current: state.current,
        addContact,
        deleteContact,
        setCurrent,
        clearCurrent
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
