import {
  compose,
  legacy_createStore as createStore,
  applyMiddleware,
} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import { rootReducer } from "./root-reducer";
// Define the middleware array
const middleWares = [
  // Logger middleware for development environment
  process.env.NODE_ENV !== "production" && logger,
  // Thunk middleware for handling asynchronous actions
  thunk,
].filter(Boolean);
// Configuration for redux-persist
const persistConfig = {
  key: "root",
  storage,
  // Exclude "user" reducer from being persisted
  blacklist: ["user"],
};
// Create a persisted reducer with the persisted config and the root reducer
const persistedReducer = persistReducer(persistConfig, rootReducer);
// Determine the enhancer for the Redux store
const composedEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;
// Apply the composed enhancer with the middleware to create the store enhancer
const composedEnhancers = composedEnhancer(applyMiddleware(...middleWares));
// Create the Redux store with the persisted reducer, initial state, and enhancers
export const store = createStore(
  persistedReducer,
  undefined,
  composedEnhancers
);
// Create the Redux persistor for persisting the store
export const persistor = persistStore(store);
