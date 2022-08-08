export const userDataReducerInitialState = {
  isLoggedIn: false,
  isAdmin: false,
  userData: {
    email: '',
    nickname: '',
  },
}

export const userDataReducer = (
  state = userDataReducerInitialState,
  action,
) => {
  switch (action.type) {
    case 'setIsLoggedIn':
      return {
        ...state,
        isLoggedIn: action.payload,
      }
    case 'setUserData':
      return {
        ...state,
        ...action.payload,
      }
    case 'LOGOUT':
      return userDataReducerInitialState
    default:
      return state
  }
}
