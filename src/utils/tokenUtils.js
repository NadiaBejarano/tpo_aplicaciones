// En tu archivo utils/tokenUtils.js
// Constante para el nombre del token en localStorage
const TOKEN_KEY = "token";

export const getToken = () => {
  return localStorage.getItem(TOKEN_KEY);
};

export const removeToken = () => {
  localStorage.removeItem(TOKEN_KEY);
};
