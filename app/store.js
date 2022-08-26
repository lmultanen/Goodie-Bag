import { configureStore } from "@reduxjs/toolkit";
import { createStore, applyMiddleware, combineReducers } from 'redux';
import candiesReducer from "./candiesReducer";
import candyReducer from "./candyReducer";


export const store = configureStore({
  reducer: {
    candies: candiesReducer,
    candy: candyReducer
  },
});
