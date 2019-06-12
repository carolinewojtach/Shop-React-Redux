import { productsReducer } from "./productReducer";
import { combineReducers } from "redux";

export default combineReducers({
  products: productsReducer
});
