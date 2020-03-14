import { Action } from "redux";

import { IUserLogin, ILoginResponse, IError } from "../../interfaces";

export enum Types {
    USER_LOGIN = 'USER_LOGIN',
    USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS',
    USER_LOGIN_FAILURE = 'USER_LOGIN_FAILURE'
};

// Action type interfaces
export interface ILoginAction extends Action {
    type: typeof Types.USER_LOGIN
    payload: IUserLogin
}

export interface ILoginSuccessAction extends Action {
    type: typeof Types.USER_LOGIN_SUCCESS
    payload: ILoginResponse
}

export interface ILoginFailureAction extends Action {
    type: typeof Types.USER_LOGIN_FAILURE
    payload: IError
}

export type Actions = ILoginAction | ILoginSuccessAction | ILoginFailureAction;
