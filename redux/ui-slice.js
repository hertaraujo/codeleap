import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: "ui",
  initialState: {
    isEditOpen: false,
    isExcludeOpen: false,
  },
  reducers: {
    toggleEditModal(state) {
      state.isEditOpen = !state.isEditOpen;
    },
    toggleExcludeModal(state) {
      state.isExcludeOpen = !state.isExcludeOpen;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice.reducer;
