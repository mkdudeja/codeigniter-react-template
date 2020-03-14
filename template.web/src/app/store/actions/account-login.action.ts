import { LoginActionTypes } from '../types';
import { IUserLogin, ILoginResponse } from '../../interfaces';

// action creators
export const loginAction = (payload: IUserLogin): LoginActionTypes.ILoginAction => ({
    type: LoginActionTypes.Types.USER_LOGIN,
    payload
});

export const loginSuccessAction = (payload: ILoginResponse): LoginActionTypes.ILoginSuccessAction => ({
    type: LoginActionTypes.Types.USER_LOGIN_SUCCESS,
    payload
});
