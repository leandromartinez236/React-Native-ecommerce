import { combineReducers } from "redux";
import { productReducer, getOneProduct, shopReducer } from "./productReducer";

const reducers = combineReducers({
  productReducer,
  getOneProduct,
  // shopReducer
})
export default reducers