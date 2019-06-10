import { cartReducer } from "./cartReducer";
import { productsReducer } from "./productReducer";
import { combineReducers } from "redux";

export default combineReducers({
  cart: cartReducer,
  products: productsReducer
});
