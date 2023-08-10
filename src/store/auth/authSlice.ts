import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { UserCredential } from "firebase/auth";
import { getUserFromLS, removeUserFromLS, setUserToLS } from "~/utils/auth";


export type UserFirebase = UserCredential['user']
interface AuthState {
  isAuth: boolean;
  user: null | UserFirebase;
  loading: boolean;
  error: null | string;
}

const initialState: AuthState = {
  isAuth: Boolean(getUserFromLS()),
  user: getUserFromLS(),
  loading: false,
  error: null,

}
export interface LoginPayload {
  email: string;
  password: string;
}


const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.loading = true
      state.error = null
    },
    loginSuccess: (state, action: PayloadAction<UserFirebase>) => {
      state.loading = false
      state.isAuth = true
      state.user = action.payload
      setUserToLS(action.payload)
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
    updateUserRequest: (state) => {
      state.loading = true
      state.error = null
    },
    updateUserSuccess: (state, action: PayloadAction<UserFirebase>) => {
      state.user = {
        ...action.payload
      }
      state.loading = false
    },
    updateUserFailure: (state, action: PayloadAction<string>) => {
      state.loading = false
      state.error = action.payload
    },
    logout: (state) => {
      state.isAuth = false
      state.user = null
      removeUserFromLS()
    }
  }
})

export const { loginRequest, loginSuccess, loginFailure, logout, updateUserSuccess, updateUserFailure, updateUserRequest } = authSlice.actions
const authReducer = authSlice.reducer
export default authReducer