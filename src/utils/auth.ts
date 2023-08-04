import { User } from "firebase/auth";

export const setUserToLS = (auth: User) => {
  localStorage.setItem("auth", JSON.stringify(auth));
}
export const getUserFromLS = () => {
  const auth = localStorage.getItem("auth");
  return auth ? JSON.parse(auth) : null;
}

export const removeUserFromLS = () => {
  localStorage.removeItem("auth");
}