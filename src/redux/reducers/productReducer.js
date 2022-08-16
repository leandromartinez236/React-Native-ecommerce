import { ActionTypes } from "../contants/actions-types";
const INITIAL_STATE = {
  products: [],
  cart: [],
  favorites: [],
  currentItem: null
}

export const productReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_PRODUCTS:
      return { ...state, products: payload }
    case ActionTypes.ADD_TO_CART:
      const item = state.products.find((prod) => prod.id === payload.id)
      const inCart = state.cart.find(item => item.id === payload.id ? true : false)
      return {
        ...state,
        cart: inCart ? state.cart.map(item => item.id === payload.id ? { ...item, } : item) : [...state.cart, { ...item }]
      }
    case ActionTypes.REMOVE_FROM_CART:
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== payload.id)
      }
    case ActionTypes.ADD_FAVORITES:
      const fav = state.products.find((fav) => fav.id === payload.id)
      const inFav = state.favorites.find(item => item.id === payload.id ? true : false)
      return {
        ...state,
        favorites: inFav ? state.favorites.map(item => item.id === payload.id ? { ...fav } : item) : [...state.favorites, { ...fav }]
      }
    case ActionTypes.REMOVE_FROM_FAVORITES:
      return {
        ...state,
        favorites: state.favorites.filter(item => item.id !== payload.id)
      }
    default:
      return state;
  }
}
export const getOneProduct = (state = {}, { type, payload }) => {
  switch (type) {
    case ActionTypes.GET_ONE_PRODUCT:
      return { ...state, ...payload }
    case ActionTypes.DELETE_ONE_PRODUCT:
      return {}
    default:
      return state;
  }
}
// export const shopReducer = (state = INITIAL_STATE, { type, payload }) => {
//   switch (type) {
//     case ActionTypes.ADD_TO_CART:
//       const item = state?.products?.find((prod) => prod.id === payload.id)
//       const inCart = state?.cart?.find(item => item.id === payload.id ? true : false)
//       return {
//         ...state,
//         cart: inCart ? state.cart.map(item => item.id === payload.id ? { ...item, } : item) : [...state.cart, { ...item }]
//       }
//     default:
//       return state;
//   }
// }