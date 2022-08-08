export const userSettingsInitialState = {
  theme: 'light',
  language: '',
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
    case 'setUserLanguage':
      return {
        ...state,
        language: action.payload,
      }
    default:
      return state
  }
}
