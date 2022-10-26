import {
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { contactAPI } from "../services/ContactsService";
import userReducer from "./reducers/UserSlice";

const rootReducer = combineReducers({
  userReducer,
  [contactAPI.reducerPath]: contactAPI.reducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(contactAPI.middleware),
});
