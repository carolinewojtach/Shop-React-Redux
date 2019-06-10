import { ACTION_TYPES as types } from "actions/actionTypes";

let initState = {
  products: [],
  // filteredServers: [],
  isLoading: true,
  isError: false,
  error: ""
};
export const productsReducer = (state = initState, action) => {
  switch (action.type) {
    case types.FETCH:
      return { ...initState, error: action.error };

    case types.FETCH_SUCCESS:
      return {
        products: action.products,
        //   filteredServers: action.servers,
        isLoading: false,
        isError: false,
        error: ""
      };

    case types.FETCH_FAILED:
      return {
        products: [],
        // filteredServers: [],
        isLoading: false,
        isError: true,
        error: action.error
      };
    default:
      return state;
  }
};
