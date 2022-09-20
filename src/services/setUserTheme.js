const storageUserTheme = () => {
    const userTheme = localStorage.getItem('theme');

    return userTheme ? JSON.parse(localStorage.getItem('theme')) : 'light';
};



const storageUserLanguage = () => {
    const userLanguage = localStorage.getItem('language');

    return userLanguage ? JSON.parse(localStorage.getItem('language')) : 'en';
};

export const themeStore = storageUserTheme();
export const languageStore = storageUserLanguage();