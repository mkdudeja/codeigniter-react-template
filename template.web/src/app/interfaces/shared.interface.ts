import { IUserInfo, ILoginResponse } from "./account-login.interface";

export interface IError {
    status: (null | number);
    message: string
}

export interface IAppState {
    loginState: ILoginResponse
}