import { createSlice } from "@reduxjs/toolkit";
// import { nanoid } from "nanoid";
import { fetchContacts, addContact, deleteContact } from "./contactsOps";
export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
    loading: false,
    error: false,
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchContacts.pending, (state) => {
        state.error = false;
        state.loading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      .addCase(addContact.pending, (state) => {
        console.log("pending");
      })
      .addCase(addContact.fulfilled, (state, action) => {
        console.log(action.payload);
        state.items.push(action.payload);
      })
      .addCase(deleteContact.pending, () => {
        console.log("deleting pending");
      })
      .addCase(deleteContact.fulfilled, (state, action) => {
        console.log("delete completed");
        console.log(action.payload);
        state.items = state.items.filter(
          (item) => item.id !== action.payload.id
        );
      }),
  // reducers: {
  //   addContact: {
  //     reducer(state, action) {
  //       state.items.push(action.payload);
  //     },
  //     prepare(values) {
  //       return {
  //         payload: {
  //           ...values,
  //           id: nanoid(),
  //         },
  //       };
  //     },
  //   },
  //   deleteContact(state, action) {
  //     state.items = state.items.filter((item) => item.id !== action.payload);
  //   },
  // },
});
// export const { deleteContact } = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;
