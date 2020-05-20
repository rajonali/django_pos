import { combineReducers } from "redux";
import products from "./products";
import transactions from "./transactions";
import cart from "./cart";

export default combineReducers({
  products,
  transactions,
  cart,
});
