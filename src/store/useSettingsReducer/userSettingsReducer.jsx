export const userSettingsInitialState = {
  theme: false,
}
export const userSettingsReducer = (
  state = userSettingsInitialState,
  action,
) => {
  switch (action.type) {
    case 'setUserThemeMode':
      return {
        ...state,
        theme: action.payload,
      }
    default:
      return state
  }
}
