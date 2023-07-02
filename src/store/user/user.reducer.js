import { USER_ACTION_TYPES } from "./user.types";
// Define the initial state for the user reducer
const INITIAL_STATE = {
  currentUser: null,
};
// Define the user reducer function
export const userReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      // When the action type is SET_CURRENT_USER, update the currentUser in the state with the payload
      return {
        ...state,
        currentUser: payload,
      };
    default:
      // For any other action type, return the current state
      return state;
  }
};
