export const adminDataInitialState = {
  adminUsers: [],
  adminProducts: [],
  blockedUsers: [],
  pagination: {
    productsPage: 0,
    usersPage: 0,
    productsRowsPerPage: 5,
    usersRowsPerPage: 2,
  },
  showPage: {
    products: false,
    users: false,
    blockedUsers: false,
  },
}

export const adminDataReducer = (state = adminDataInitialState, action) => {
  switch (action.type) {
    case 'setAdminUsersData':
      return {
        ...state,
        adminUsers: action.payload,
      }
    case 'showUsers':
      return {
        ...state,
        showPage: {
          ...state.showPage,
          users: true,
          products: false,
          blockedUsers: false,
        },
      }
    case 'showBlockedUsers':
      return {
        ...state,
        showPage: {
          ...state.showPage,
          users: false,
          products: false,
          blockedUsers: true,
        },
      }
    case 'showProducts':
      return {
        ...state,
        showPage: {
          ...state.showPage,
          users: false,
          products: true,
          blockedUsers: false,
        },
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
      }
    case 'removeBlockedUser':
      return {
        ...state,
        blockedUsers: state.blockedUsers.filter(
          (user) => user.id !== action.payload,
        ),
      }

    case 'unblockUser':
      return {
        ...state,
        blockedUsers: state.blockedUsers.filter(
          (user) => user.id !== action.payload,
        ),
        adminUsers: [
          ...state.blockedUsers.filter((user) => user.id === action.payload),
          ...state.adminUsers,
        ],
      }
    case 'setAdminProductsData':
      return {
        ...state,
        adminProducts: action.payload,
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
        adminProducts: [action.payload, ...state.adminProducts],
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
