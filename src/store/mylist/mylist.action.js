import { createAction } from "../../utils/reducer/reducer.utils";
import { MYLIST_ACTION_TYPES } from "./mylist.types";

// Function to add a movie or TV show to a list item array
const addToListItem = (listItemArray, movieTVFavouriteObject) => {
  const existingItem = listItemArray.find(
    (listItem) => listItem.id === movieTVFavouriteObject.id
  );

  if (existingItem) {
    // If the item already exists in the list, create a new array with the updated item
    return listItemArray.map((item) =>
      item.id === movieTVFavouriteObject.id ? { ...item } : item
    );
  }
  // If the item does not exist in the list, add it to the array
  return [...listItemArray, { ...movieTVFavouriteObject }];
};
// Function to add a favorite item to the list item array
export const addFavouriteItem = (listItemArray, movieTvObject) => {
  // Call the addToListItem function to add the favorite item to the list
  const newItemsList = addToListItem(listItemArray, movieTvObject);
  // Create and return an action to update the list items in the state
  return createAction(MYLIST_ACTION_TYPES.SET_MYLIST_ITEMS, newItemsList);
};
