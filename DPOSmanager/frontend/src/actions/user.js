import axios from "axios";

import { ADD_USER, DELETE_USER, GET_USER } from "./types";

// GET PRODUCTS
export const getUser = () => (dispatch) => {
  axios
    .get("/api/login/")
    .then((res) => {
      dispatch({
        type: GET_USER,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// DELETE PRODUCT
export const deleteUser = (id) => (dispatch) => {
  axios
    .delete(`/api/login/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_USER,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD PRODUCT MODIFIED!!!!
export const addUser = (user) => (dispatch) => {
  var user = {
    id: user.id,
    price: user.price,
    quantity: user.quantity,
    total: user.total,
  };

  axios
    .post(`/api/login/`, user)
    .then((res) => {
      dispatch({
        type: ADD_USER,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
