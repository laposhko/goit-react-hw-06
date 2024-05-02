import { createSlice } from "@reduxjs/toolkit";
// export const changeFilter = createAction("filter/setFilter");

// export const filterReducer = createReducer({ name: "" }, (builder) => {
//   builder.addCase(changeFilter, (state, action) => {
//   });
// });

export const filterSlice = createSlice({
  name: "filter",
  initialState: { name: "" },
  reducers: {
    changeFilter(state, action) {
      console.log(state.name);
      state.name = action.payload;
    },
  },
});

export const { changeFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
