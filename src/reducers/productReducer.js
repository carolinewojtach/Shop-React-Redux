import { ACTION_TYPES as types } from "actions/actionTypes";

let initState = {
  products: [],
  // filteredServers: [],
  isLoading: true,
  isError: false,
  error: "",
  cart: []
};

export const productsReducer = (state = initState, action) => {
  switch (action.type) {
    case types.FETCH:
      return { ...state, error: action.error };

    case types.FETCH_SUCCESS:
      return {
        ...state,
        products: action.products.map(p => {
          p.amount = +p.amount;
          return p;
        }),
        //   filteredServers: action.servers,
        isLoading: false,
        isError: false,
        error: ""
      };

    case types.FETCH_FAILED:
      return {
        ...state,
        products: [],
        // filteredServers: [],
        isLoading: false,
        isError: true,
        error: action.error
      };

    case types.ADD_TO_CART: {
      const product = state.products.find(p => p.id === action.productId);

      let newCart = [...state.cart];

      //   check if product is in cart already
      const productInCart = state.cart.find(p => p.id === action.productId);
      if (productInCart) {
        newCart = newCart.map(p => {
          if (p.id === action.productId) {
            p.number += 1;
            p.amount += product.amount;
          }
          return p;
        });
      } else {
        newCart.push({ ...product, number: 1 });
      }

      return { ...state, cart: [...newCart] };
    }

    case types.DELETE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(p => p.id !== action.productId)
      };

    default:
      return state;
  }
};
