import { useCookies } from 'react-cookie';

const TOKEN_NAME = 'authToken';

export const useAuthToken = (): [
  authToken: string,
  setAuthToken: (token: string) => void,
  removeAuthToken: () => void,
] => {
  const [cookies, setCookie, removeCookie] = useCookies([TOKEN_NAME]);

  const setAuthToken = (token: string): void => setCookie(TOKEN_NAME, token);
  const removeAuthToken = (): void => removeCookie(TOKEN_NAME);

  return [cookies[TOKEN_NAME], setAuthToken, removeAuthToken];
};
