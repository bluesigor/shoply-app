export const shoppingCartInitialState = {
  cart: [],
  total: 0,
  purchased: false,
}

export const shoppingCartReducer = (
  state = shoppingCartInitialState,
  action,
) => {
  switch (action.type) {
    case 'addToShoppingCart':
      return {
        ...state,
        cart: action.tempProduct
          ? state.cart.map((item) =>
              item.id === action.product.id
                ? {
                    ...action.tempProduct,
                    quantity: action.tempProduct.quantity + 1,
                    subtotal:
                      action.tempProduct.price * action.tempProduct.quantity +
                      action.product.price,
                    shippingFee:
                      (action.tempProduct.subtotal + action.tempProduct.price) /
                      10,
                  }
                : item,
            )
          : [
              ...state.cart,
              {
                ...action.product,
                quantity: 1,
                subtotal: action.product.price,
                shippingFee: action.product.price / 10,
              },
            ],
      }

    case 'removeFromShoppingCart':
      return {
        ...state,
        cart:
          action.existProduct.quantity === 1
            ? state.cart.filter((item) => item.id !== action.product.id)
            : state.cart.map((item) =>
                item.id === action.product.id
                  ? {
                      ...action.existProduct,
                      quantity: action.existProduct.quantity - 1,
                      shippingFee:
                        (action.existProduct.subtotal +
                          action.existProduct.price) /
                        10,
                      subtotal:
                        action.existProduct.subtotal -
                        action.existProduct.price,
                    }
                  : item,
              ),
      }
    case 'removeProduct':
      return {
        ...state,
        cart: state.cart.find((item) => item.id === action.payload.id)
          ? state.cart.filter((item) => item.id !== action.payload.id)
          : null,
      }
    case 'clearCart':
      return {
        ...state,
        cart: [],
        purchased: true,
      }
    case 'setTotal':
      return {
        ...state,
        total:
          state.cart.length > 1
            ? Math.round(
                state.cart
                  .map((item) => item.subtotal)
                  .reduce((acc, item) => acc + item),
              ) +
              Math.round(
                state.cart
                  .map((item) => item.shippingFee)
                  .reduce((acc, item) => acc + item),
              )
            : state.cart.length === 1
            ? Math.round(state.cart.map((item) => item.subtotal)) +
              Math.round(state.cart.map((item) => item.shippingFee))
            : 0,
      }
    default:
      return state
  }
}
