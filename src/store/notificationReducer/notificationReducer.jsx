export const notificationInitialState = {
  open: false,
  message: '',
}

export const notificationReducer = (
  state = notificationInitialState,
  action,
) => {
  switch (action.type) {
    case 'setNotificationOpen':
      return {
        ...state,
        open: true,
        message: action.payload,
      }
    case 'setNotificationClose':
      return {
        ...state,
        open: false,
        message: '',
      }
    default:
      return state
  }
}
