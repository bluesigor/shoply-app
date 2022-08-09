export const productsDataInitialState = {
  products: [],
  error: false,
  isLoading: true,
}

export const productsDataReducer = (state, action) => {
  switch (action.type) {
    case 'setProductsData':
      return {
        ...state,
        products: action.payload,
        error: false,
        isLoading: false,
      }
    case 'setProductsDataError':
      return {
        ...state,
        isLoading: false,
        error: true,
      }
    default:
      return state
  }
}
