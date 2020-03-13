import { ofType, ActionsObservable } from 'redux-observable';
import { ajax, AjaxResponse } from 'rxjs/ajax';
import { mergeMap, map } from 'rxjs/operators';

import { LoginActions } from '../actions';
import { LoginActionTypes } from '../types';
import { IUserInfo } from '../../interfaces';

const accountLoginEpic = (action$: ActionsObservable<LoginActionTypes.Actions>) => action$.pipe(
    ofType(LoginActionTypes.Types.USER_LOGIN),
    mergeMap((action: LoginActionTypes.Actions) =>
        ajax.getJSON<AjaxResponse>(`https://api.github.com/users/${action.payload}`)
            .pipe(
                map((result: AjaxResponse) => LoginActions.loginSuccessAction(result.response as IUserInfo))
            )
    )
);

export default [
    accountLoginEpic
];