import { DETAIL_ACTION_TYPES } from "./detail.types";
// Initial state for the detail reducer
const INITIAL_STATE = {
  details: {},
  similarMovies: [],
  movieVideos: [],
  casts: [],
  isLoading: false,
  error: null,
};
// Reducer function for the detail state
export const detailReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case DETAIL_ACTION_TYPES.DETAIL_IS_LOADING:
      // Set isLoading to true when detail data is loading
      return {
        ...state,
        isLoading: true,
      };
    case DETAIL_ACTION_TYPES.DETAILS_SUCCESS:
      // Update the detail data when successful
      return {
        ...state,
        details: payload,
        isLoading: false,
      };
    case DETAIL_ACTION_TYPES.DETAILS_CLEAR:
      // Clear the detail data
      return {
        ...state,
        details: {},
      };
    case DETAIL_ACTION_TYPES.DETAILS_SIMILAR_MOVIES:
      // Update the list of similar movies
      return {
        ...state,
        similarMovies: payload,
        isLoading: false,
      };
    case DETAIL_ACTION_TYPES.DETAILS_MOVIES_TRAILERS:
      // Update the list of movie trailers
      return {
        ...state,
        movieVideos: payload,
        isLoading: false,
      };
    case DETAIL_ACTION_TYPES.DETAILS_CAST:
      // Update the list of casts
      return {
        ...state,
        casts: payload,
        isLoading: false,
      };
    case DETAIL_ACTION_TYPES.DETAIL_ERROR:
      // Set the error message when an error occurs
      return {
        ...state,
        error: payload,
        isLoading: false,
      };
    default:
      // Return the current state by default
      return state;
  }
};
