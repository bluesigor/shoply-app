export const shoppingCartInitialState = {
  cart: [],
  subTotal: 0,
}

export const shoppingCartReducer = (
  state = shoppingCartInitialState,
  action,
) => {
  switch (action.type) {
    case 'setShoppingCart':
      return {
        ...state,
        cart: action.payload,
      }
    case 'setSubTotal':
      return {
        ...state,
        subTotal: action.payload,
      }
    default:
      return state
  }
}
