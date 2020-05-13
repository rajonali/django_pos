import axios from "axios";

import { GET_PRODUCTS, DELETE_PRODUCT, ADD_PRODUCT } from "./types";

// GET PRODUCTS
export const getProducts = () => (dispatch) => {
  axios
    .get("/api/backend/")
    .then((res) => {
      dispatch({
        type: GET_PRODUCTS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// DELETE PRODUCT
export const deleteProduct = (id) => (dispatch) => {
  axios
    .delete(`/api/backend/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_PRODUCT,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD PRODUCT
export const addProduct = (product) => (dispatch) => {
  axios
    .post(`/api/backend/`, product)
    .then((res) => {
      dispatch({
        type: ADD_PRODUCT,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
