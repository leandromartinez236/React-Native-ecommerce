import { ActionTypes } from "../contants/actions-types";

export const getProducts = (products) => {
  return {
    type: ActionTypes.GET_PRODUCTS,
    payload: products
  }
}
export const getOneProduct = (product) => {
  return {
    type: ActionTypes.GET_ONE_PRODUCT,
    payload: product
  }
}
export const deleteOneProduct = () => {
  return {
    type: ActionTypes.DELETE_ONE_PRODUCT
  }
}
export const addToCart = (id) => {
  return {
    type: ActionTypes.ADD_TO_CART,
    payload: { id }
  }
}
export const removeToCart = (id) => {
  return {
    type: ActionTypes.REMOVE_FROM_CART,
    payload: { id }
  }
}
export const addFavorites = (id) => {
  return {
    type: ActionTypes.ADD_FAVORITES,
    payload: { id }
  }
}
export const removeFromFavorites = (id) => {
  return {
    type: ActionTypes.REMOVE_FROM_FAVORITES,
    payload: { id }
  }
}