import { createStore } from "redux";
import {
  ADD_PRODUCTS,
  GET_PRODUCTS,
  DELETE_PRODUCTS,
  UPDATE_PRODUCTS,
} from "../constants";

const counterReducer = (state = { products: [] }, action) => {
  if (action.type === GET_PRODUCTS) {
    return {
      products: action.data,
    };
  }
  if (action.type === ADD_PRODUCTS) {
    return {
      products: [...state.products, action.data],
    };
  }
  if (action.type === UPDATE_PRODUCTS) {
    return {
      products: action.data,
    };
  }
  if (action.type === DELETE_PRODUCTS) {
    return {
      products: action.data,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
