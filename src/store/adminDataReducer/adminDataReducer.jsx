export const adminDataInitialState = {
  adminUsers: [],
  adminProducts: [],
  blockedUsers: [],
  pagination: {
    page: 0,
    rowsPerPage: 2,
  },
}

export const adminDataReducer = (state = adminDataInitialState, action) => {
  switch (action.type) {
    case 'setAdminUsersData':
      return {
        ...state,
        adminUsers: action.payload,
        adminProducts: [],
      }
    case 'setBlockedUser':
      return {
        ...state,
        blockedUsers: [
          ...state.blockedUsers,
          ...state.adminUsers.filter((user) => user.id === action.payload),
        ],
        adminUsers: state.adminUsers.filter(
          (user) => user.id !== action.payload,
        ),
        adminProducts: [],
      }
    case 'removeBlockedUser':
      return {
        ...state,
        blockedUsers: state.blockedUsers.filter(
          (user) => user.id !== action.payload,
        ),
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
    case 'handlePagination':
      return {
        ...state,
        pagination: {
          ...state.pagination,
          ...action.payload,
        },
      }

    default:
      return state
  }
}
