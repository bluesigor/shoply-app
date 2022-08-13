export const singleProductInitialState = {
  product: null,
  isChoosen: false,
}

export const singleProductReducer = (
  state = singleProductInitialState,
  action,
) => {
  switch (action.type) {
    case 'setSingleProductData':
      return {
        ...state,
        product: action.payload,
        isChoosen: true,
      }
    default:
      return state
  }
}
