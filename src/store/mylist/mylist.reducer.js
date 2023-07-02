import { MYLIST_ACTION_TYPES } from "./mylist.types";
// Define the initial state for the myList reducer
const INITIAL_STATE = {
  myList: [],
};
// Define the myList reducer function
export const myListReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case MYLIST_ACTION_TYPES.SET_MYLIST_ITEMS:
      // When the action type is SET_MYLIST_ITEMS, update the myList array with the payload
      return {
        ...state,
        myList: payload,
      };
    default:
      // For any other action type, return the current state
      return state;
  }
};
