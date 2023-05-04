import { configureStore } from "@reduxjs/toolkit";
import { FETCH_DB_ITEMS_FAILURE, FETCH_DB_ITEMS_SUCCESS } from "./actions";

const initialState = {
  items: [],
  error: null,
};

const dbItemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DB_ITEMS_SUCCESS:
      return { ...state, items: action.payload };
    case FETCH_DB_ITEMS_FAILURE:
      return { ...state, error: action.payload };
    default:
      return state;
  }
};

const store = configureStore({ reducer: dbItemsReducer, devTools: false });

export default store;
