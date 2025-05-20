import { createAction } from "@reduxjs/toolkit";


export const changeFilter = createAction("filters/changeFilter");


const initialState = {
  name: "",
};


export default function filtersReducer(state = initialState, action) {
  console.log("filtersReducer", action);

  switch (action.type) {
    case "filters/changeFilter":
      return {
        ...state,
        name: action.payload,
      };


    default:
      return state;
  }
}