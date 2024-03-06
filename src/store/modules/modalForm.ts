import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../config/configStore";

//초기값 타입
interface CounterState {
  value: boolean;
}

//초기값 설정
const initialState: CounterState = {
  value: false,
};

//slice 설정
export const toggleSlice = createSlice({
  name: "modalTodo",
  initialState,
  reducers: {
    modalToggle: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

//actions
export const { modalToggle } = toggleSlice.actions;

export const selectCount = (state: RootState) => state.modalToggle.value;

//reducers
export default toggleSlice.reducer;
