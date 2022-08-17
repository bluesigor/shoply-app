export const shoppingCartInitialState = {
  cart: [],
  total: 0,
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
    case 'setTotal':
      return {
        ...state,
        total: action.payload,
      }
    default:
      return state
  }
}
