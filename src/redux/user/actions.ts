import { User } from '../../models/user/types';
import {
    LOGIN_REQUESTED,
    LOGIN_SUCCESS,
    LOG_OUT_SUCCESS, SIGNIN_REQUESTED, SIGNIN_SUCCESS, userLoginRequested,
    userLoginSuccess,
    userLogoutSuccess, userSignInRequested, userSignInSuccess
} from './types';


export const sigInRequested = (signUser: Partial<User>): userSignInRequested => ({
    type: SIGNIN_REQUESTED,
    payload: signUser,
})

export const sigInSuccess = (signUser: User): userSignInSuccess => ({
    type: SIGNIN_SUCCESS,
    payload: signUser,
});



export const loginRequested = (logUser: Partial<User>): userLoginRequested => ({
    type: LOGIN_REQUESTED,
    payload: logUser,
})

export const loginSuccess = (newUser: User): userLoginSuccess => ({
    type: LOGIN_SUCCESS,
    payload: newUser,
});

export const logOutSuccess = (): userLogoutSuccess => ({
    type: LOG_OUT_SUCCESS
});