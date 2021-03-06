import { GET_USER, DELETE_USER, ADD_USER } from "../actions/types.js";

const initialState = {
  user: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_USER:
      return {
        ...state,
        user: action.payload,
      };
    case DELETE_USER:
      return {
        ...state,
        user: state.user.filter((user) => user.id != action.payload),
      };
    case ADD_USER:
      return {
        ...state,
        user: [...state.user, action.payload],
      };

    default:
      return state;
  }
}
