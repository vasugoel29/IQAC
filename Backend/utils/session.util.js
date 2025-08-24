const currentSession = {
  token: "",
};

export const getToken = () => {
  return currentSession.token;
};

export const setToken = (token) => {
  currentSession.token = token;
};
