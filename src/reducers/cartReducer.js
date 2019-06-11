import { ACTION_TYPES as types } from "actions/actionTypes";

let initState = {};

export const cartReducer = (state = initState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      return state;
    default:
      return state;
  }
};
