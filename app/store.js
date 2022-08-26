import { configureStore } from "@reduxjs/toolkit";
import { createStore, applyMiddleware, combineReducers } from 'redux';
import candiesReducer from "./candiesReducer";


export const store = configureStore({
  reducer: {
    candies: candiesReducer
  },
});
