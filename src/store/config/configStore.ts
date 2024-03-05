import { configureStore } from "@reduxjs/toolkit";
import modalToggle from "../modules/modalForm";
const store = configureStore({
  reducer: {
    modalToggle,
  },
});

export default store;
