import { createSlice, configureStore } from "@reduxjs/toolkit";
import { legacy_createStore as createStore } from "redux";
import counterSliceReducer from "./counterslice.js";
import authSliceReducer from "./authSlice.js";

const store = configureStore({
    reducer: { counter: counterSliceReducer, auth: authSliceReducer },
});

export default store;
