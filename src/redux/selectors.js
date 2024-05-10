import { createSelector } from "@reduxjs/toolkit";

const selectContacts = (state) => state.contacts.items;

export const selectLoading = (state) => state.contacts.loading.fetching;
export const selectError = (state) => state.contacts.error;
export const selectNameFilter = (state) => state.filter.name;
export const selectContactLoader = (state) => state.contacts.loading.adding;
export const selectContactDeleter = (state) => state.contacts.loading.deleting;

export const selectVisibleContacts = createSelector(
  [selectContacts, selectNameFilter],
  (contacts, filter) => {
    console.log("ssss");
    return contacts.filter(
      (contact) =>
        contact.name.toLowerCase().includes(filter.toLowerCase()) ||
        contact.number.toLowerCase().includes(filter.toLowerCase())
    );
  }
);
// export const selectVisibleContacts = (state) => {
//   const contacts = selectContacts(state);
//   const filter = selectNameFilter(state);
//   console.log("dddd");
//   return contacts.filter(
//     (contact) =>
//       contact.name.toLowerCase().includes(filter.toLowerCase()) ||
//       contact.number.toLowerCase().includes(filter.toLowerCase())
//   );
// };
