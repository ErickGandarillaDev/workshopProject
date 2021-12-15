import { call, put, takeEvery } from "@redux-saga/core/effects";
import { User } from "../../models/user/types";
import { login, signin } from "../../services/user/services";
import { popLoading, pushLoading } from "../ui/actions";
import { popLoadingSuccess, pushLoadingSuccess } from "../ui/types";
import { loginSuccess, sigInSuccess } from './actions';
import { LOGIN_REQUESTED, SIGNIN_REQUESTED, userLoginRequested, userLoginSuccess, userSignInRequested, userSignInSuccess } from './types';

function* fetchLogin(action: userLoginRequested) {
  try {
    yield put<pushLoadingSuccess>(pushLoading());
    const user: User = yield call(login, action.payload);
    //const infouser: User = yield call (getInfoUser,action.payload);
    yield put<popLoadingSuccess>(popLoading());
    yield put<userLoginSuccess>(loginSuccess(user));
  } catch (error) { }
}

function* fetchSignIn(action: userSignInRequested) {
  try {
    yield put<pushLoadingSuccess>(pushLoading());
    const userReg: User = yield call(signin, action.payload);
    yield put<userSignInSuccess>(sigInSuccess(userReg));
    const user: User = yield call(login, action.payload);
    yield put<popLoadingSuccess>(popLoading());
    yield put<userLoginSuccess>(loginSuccess(user));
  } catch (error) { }
}
export function* userSaga() {
  yield takeEvery(LOGIN_REQUESTED, fetchLogin);
  yield takeEvery(SIGNIN_REQUESTED, fetchSignIn);
}
