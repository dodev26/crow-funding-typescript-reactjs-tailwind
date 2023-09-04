import { PayloadAction } from "@reduxjs/toolkit";
import { put, call, takeLatest } from 'redux-saga/effects';
import { LoginPayload, loginFailure, loginRequest, loginSuccess } from "./authSlice";
import { auth } from "~/firebase/initialize";
import { UserCredential, signInWithEmailAndPassword } from "firebase/auth";
import { FirebaseError } from "firebase/app";


// Generator<unknown, void, UserCredential>
function* handleLogin(action: PayloadAction<LoginPayload>): Generator<unknown, void, UserCredential> {
  try {
    const { email, password } = action.payload
    const userCredential = yield call(
      signInWithEmailAndPassword,
      auth,
      email,
      password
    )
    yield put(loginSuccess(userCredential.user))
  } catch (error) {
    if (error instanceof FirebaseError) {
      yield put(loginFailure(error.message))
    }
  }
}

function* authSaga() {

  yield takeLatest(loginRequest.type, handleLogin);

}

export default authSaga;