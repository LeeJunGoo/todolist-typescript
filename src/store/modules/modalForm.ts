import { createSlice } from "@reduxjs/toolkit";

//초기값 설정
const initialState = false;

//slice 설정
const toggleSlice = createSlice({
  name: "modalTodo",
  initialState,
  reducers: {
    modalToggle: (state, action) => {
      return (state = action.payload);
    },
  },
});

//actions
export const { modalToggle } = toggleSlice.actions;

//reducers
export default toggleSlice.reducer;
