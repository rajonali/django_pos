import axios from "axios";

import { ADD_CART, DELETE_CART, GET_CART } from "./types";

// GET PRODUCTS
export const getCart = () => (dispatch) => {
  axios
    .get("/api/cart/")
    .then((res) => {
      dispatch({
        type: GET_CART,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// DELETE PRODUCT
export const deleteCart = (id) => (dispatch) => {
  axios
    .delete(`/api/cart/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_CART,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD PRODUCT MODIFIED!!!!
export const addCart = (product) => (dispatch) => {
  var product2 = {
    id: product.id,
    price: product.price,
    quantity: product.quantity,
    total: product.total,
  };

  axios
    .post(`/api/cart/`, product2)
    .then((res) => {
      dispatch({
        type: ADD_CART,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
