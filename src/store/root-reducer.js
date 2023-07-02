import { combineReducers } from "redux";
import { userReducer } from "./user/user.reducer";
import { moviesReducer } from "./movies/movies.reducer";
import { detailReducer } from "./moviedetail/detail.reducer";
import { myListReducer } from "./mylist/mylist.reducer";
// Combine all the reducers into a single root reducer
export const rootReducer = combineReducers({
  // Reducer for managing user state
  user: userReducer,
  // Reducer for managing movie state
  movies: moviesReducer,
  // Reducer for managing movie/TV show details state
  movieTvDetails: detailReducer,
  // Reducer for managing myList state
  myListData: myListReducer,
});
