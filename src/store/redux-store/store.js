import { configureStore } from "@reduxjs/toolkit";
import UIReducer from "./UI-slice";

const reduxStore = configureStore({
  reducer: { UI: UIReducer },
});

export default reduxStore;
