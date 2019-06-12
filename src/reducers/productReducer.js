import { ACTION_TYPES as types } from "actions/actionTypes";

let initState = {
  products: [],
  // filteredServers: [],
  isLoading: true,
  isError: false,
  error: "",
  cart: [
    {
      id: "5c5e94edfa87475c9c7433f0",
      name: "iMac 27 Retina",
      image: "https://i.imgur.com/s7zey8T.jpg",
      manufacture: "Apple",
      amount: "2099.99",
      category: "desktop",
      featured: true,
      number: 1
    },
    {
      id: "5c5e94eddb3b43421561cd1a",
      name: "Surface Studio",
      image: "https://i.imgur.com/CCanSEL.jpg",
      manufacture: "Microsoft",
      amount: "3749.99",
      category: "desktop",
      featured: false,
      number: 1
    }
  ]
};

export const productsReducer = (state = initState, action) => {
  switch (action.type) {
    case types.FETCH:
      return { ...initState, error: action.error };

    case types.FETCH_SUCCESS:
      return {
        ...state,
        products: action.products,
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
      if (product) {
        product.number = 1;
        console.log(product);
      }

      // check if product is in cart already
      const productInCart = state.cart.find(p => p.id === action.productId);
      if (productInCart) {
        productInCart.number += 1;
        productInCart.amount += product.amount;
        console.log(productInCart);
      }

      return { ...state, cart: [...product, ...state.cart] };
    }
    default:
      return state;
  }
};
