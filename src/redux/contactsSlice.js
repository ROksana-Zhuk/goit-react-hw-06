import { createAction } from "@reduxjs/toolkit";


export const addContact = createAction("contacts/addContact");
export const deleteContact = createAction("contacts/deleteContact");

const initialState = {
  items: []
};

export default function contactsReducer(state = initialState, action) {
  console.log("contactsReducer", action);

  switch (action.type) {
    case "contacts/addContact":
      return {
        ...state,
        items: [...state.items, action.payload]
      };

    case "contacts/deleteContact":
      return {
        ...state,
        items: state.items.filter((contact) => contact.id !== action.payload),
      };

    default:
      return state;
  }
}