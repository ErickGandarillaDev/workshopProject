import { Action } from "redux";
import { User } from '../../models/user/types';

export interface userState {
    info: Omit<Partial<User>, "password">;
};

export const LOGIN_REQUESTED = "LOGIN_REQUESTED";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_ERROR = "LOGIN_ERROR";


export const SIGNIN_REQUESTED = "SIGNIN_REQUESTED";
export const SIGNIN_SUCCESS = "SIGNIN_SUCCESS";
export const SIGNIN_ERROR = "SIGNIN_ERROR";

export const LOG_OUT_REQUESTED = "LOG_OUT_REQUESTED";
export const LOG_OUT_SUCCESS = "LOG_OUT_SUCCESS";
export const LOG_OUT_ERROR = "LOG_OUT_ERROR";


export interface userSignInRequested extends Action {
    type: typeof SIGNIN_REQUESTED;
    payload: Partial<User>;
}

export interface userSignInSuccess extends Action {
    type: typeof SIGNIN_SUCCESS;
    payload: User;
}

export interface userSigInError extends Action {
    type: typeof SIGNIN_ERROR;
}



export interface userLoginRequested extends Action {
    type: typeof LOGIN_REQUESTED;
    payload: Partial<User>;
}

export interface userLoginSuccess extends Action {
    type: typeof LOGIN_SUCCESS;
    payload: User;
}

export interface userLogoutSuccess extends Action {
    type: typeof LOG_OUT_SUCCESS;
}


export type userAction = userLoginSuccess | userLogoutSuccess | userSignInRequested | userSignInSuccess;
