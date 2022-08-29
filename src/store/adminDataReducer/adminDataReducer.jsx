export const adminDataInitialState = {
  adminUsers: [],
  adminProducts: [],
}

export const adminDataReducer = (state = adminDataInitialState, action) => {
  switch (action.type) {
    case 'setAdminUsersData':
      return {
        ...state,
        adminUsers: action.payload,
        adminProducts: [],
      }
    case 'setAdminProductsData':
      return {
        ...state,
        adminProducts: action.payload,
        adminUsers: [],
      }
    case 'updateAdminProductsData':
      return {
        ...state,
        adminProducts: state.adminProducts.map((product) =>
          product.id === action.id ? action.value : product,
        ),
      }
    case 'addNewProduct':
      return {
        ...state,
        adminProducts: [...state.adminProducts, action.payload],
      }
    case 'removeProductData':
      return {
        ...state,
        adminProducts: state.adminProducts.filter(
          (product) => product.id !== action.payload,
        ),
      }

    default:
      return state
  }
}
