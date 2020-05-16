import axios from "axios";

import { GET_TRANSACTIONS, DELETE_TRANSACTION, ADD_TRANSACTION } from "./types";

// GET PRODUCTS
export const getTransactions = () => (dispatch) => {
  axios
    .get("/api/transactions/")
    .then((res) => {
      dispatch({
        type: GET_TRANSACTIONS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

// DELETE PRODUCT
export const deleteTransaction = (id) => (dispatch) => {
  axios
    .delete(`/api/transactions/${id}`)
    .then((res) => {
      dispatch({
        type: DELETE_TRANSACTION,
        payload: id,
      });
    })
    .catch((err) => console.log(err));
};

// ADD PRODUCT
export const addTransaction = (transaction) => (dispatch) => {
  axios
    .post(`/api/transactions/`, transaction)
    .then((res) => {
      dispatch({
        type: ADD_TRANSACTION,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};
