import { languageStore, themeStore } from '../../services/setUserTheme'

export const userSettingsInitialState = {
  theme: themeStore,
  language: languageStore,
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
