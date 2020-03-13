import { LoginActionTypes } from '../types';
import { IUserLogin, IUserInfo } from '../../interfaces';

// action creators
export const loginAction = (payload: IUserLogin): LoginActionTypes.ILoginAction => ({
    type: LoginActionTypes.Types.USER_LOGIN,
    payload
});

export const loginSuccessAction = (payload: IUserInfo): LoginActionTypes.ILoginSuccessAction => ({
    type: LoginActionTypes.Types.USER_LOGIN_SUCCESS, payload
});
