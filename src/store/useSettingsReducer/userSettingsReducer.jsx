export const userSettingsInitialState = {
  theme: 'light',
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
