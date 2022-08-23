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
    default:
      return state
  }
}
