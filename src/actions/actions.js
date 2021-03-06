import { ACTION_TYPES as types } from "./actionTypes";

const axios = require("axios");
const url = "http://react2018-shop.s3-website-eu-west-1.amazonaws.com";

// ACTIONS DISPATCHED
export const fetchPending = error => ({ type: types.FETCH, error });
export const fetchSuccess = products => ({
  type: types.FETCH_SUCCESS,
  products
});
export const fetchProductsFailed = error => ({
  type: types.FETCH_FAILED,
  error
});

export const addToCart = productId => ({ type: types.ADD_TO_CART, productId });

export const deleteFromCart = productId => ({
  type: types.DELETE_FROM_CART,
  productId
});

export const getByFilter = filters => ({ type: types.GET_BY_FILTER, filters });

// API REQUESTS
export const fetchProducts = () => {
  return dispatch => {
    dispatch(fetchPending("Loading..."));

    axios
      .get(url)
      .then(res => res.data)
      .then(data => dispatch(fetchSuccess(data)))
      .catch(() => {
        dispatch(fetchProductsFailed("Something went wrong"));
      });
  };
};
