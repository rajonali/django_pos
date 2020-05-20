import { GET_CART, DELETE_CART, ADD_CART } from "../actions/types.js";

const initialState = {
  cart: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_CART:
      return {
        ...state,
        cart: action.payload,
      };
    case DELETE_CART:
      return {
        ...state,
        cart: state.cart.filter((product) => product.id != action.payload),
      };
    case ADD_CART:
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    default:
      return state;
  }
}
