import { accountLoginConstants } from '../constants';
import { IUserLogin, ILoginResponse } from '../../interfaces';

// action creators
export const loginAction = (payload: IUserLogin): accountLoginConstants.ILoginAction => ({
    type: accountLoginConstants.Types.USER_LOGIN,
    payload
});

export const loginSuccessAction = (payload: ILoginResponse): accountLoginConstants.ILoginSuccessAction => ({
    type: accountLoginConstants.Types.USER_LOGIN_SUCCESS,
    payload
});
