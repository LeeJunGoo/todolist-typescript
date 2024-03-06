import { configureStore } from "@reduxjs/toolkit";
import modalToggle from "../modules/modalForm";
const store = configureStore({
  reducer: {
    modalToggle,
  },
});

//스토어 자체에서 'RootState' 및 'AppDispatch' 유형 추론
export type RootState = ReturnType<typeof store.getState>;

//추론된 유형: reducer
export type AppDispatch = typeof store.dispatch;

export default store;
