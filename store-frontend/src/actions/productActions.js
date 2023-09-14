import {
  GET_PRODUCTS,
  ADD_PRODUCTS,
  UPDATE_PRODUCTS,
  DELETE_PRODUCTS,
} from "../constants";

export function getProductAction(items) {
  return {
    type: GET_PRODUCTS,
    data: items,
  };
}

export function addProductAction(item) {
  return {
    type: ADD_PRODUCTS,
    data: item,
  };
}

export function updateProductAction(items) {
  return {
    type: UPDATE_PRODUCTS,
    data: items,
  };
}

export function deleteProductAction(items) {
  return {
    type: DELETE_PRODUCTS,
    data: items,
  };
}
