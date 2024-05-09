import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filterReducer } from "./filtersSlice";
// import { combineReducers } from "@reduxjs/toolkit";
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// // } from "redux-persist";
// import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
// const contactsPersistConfig = {
//   key: "contacts",
//   storage,
//   whitelist: ["items"],
// };
// const filterPersistConfig = {
//   key: "filter",
//   storage,
//   whitelist: ["name"],
// };
// const persistedContactsReducer = persistReducer(
//   contactsPersistConfig,
//   contactsReducer
// );
// const persistedFilterReducer = persistReducer(
//   filterPersistConfig,
//   filterReducer
// );
export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filter: filterReducer,
  },
  // middleware: (getDefaultMiddleware) =>
  //   getDefaultMiddleware({
  //     serializableCheck: {
  //       ignoreActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  //     },
  //   }),
});

// export const persistor = persistStore(store);
