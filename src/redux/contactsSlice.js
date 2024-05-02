import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
const initialState = {
  items: [
    { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
    { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
    { id: "id-3", name: "Eden Clements", number: "645-17-79" },
    { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
  ],
};
export const contactsSlice = createSlice({
  name: "contacts",
  initialState: initialState,

  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(values) {
        return {
          payload: {
            ...values,
            id: nanoid(),
          },
        };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
  },
});
export const { addContact, deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
// export const contactsReducer = createReducer(initialState, (builder) => {
//   builder.addCase(addContact, (state, action) => {
//     state.items.push(action.payload);
//   });
//   builder.addCase(deleteContact, (state, action) => {
//     state.items = state.items.filter((item) => item.id !== action.payload);
//   });
// });
// export const contactsReducer = (
//   state = {
//     items: [
//       { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
//       { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
//       { id: "id-3", name: "Eden Clements", number: "645-17-79" },
//       { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
//     ],
//   },
//   action
// ) => {
//   switch (action.type) {
//     case "contacts/addContact":
//       return {
//         ...state,
//         items: [...state.items, action.payload],
//       };
//     case "contacts/deleteContact":
//       return {
//         ...state,
//         items: state.items.filter((item) => item.id !== action.payload),
//       };
//     default:
//       return state;
//   }
// };
