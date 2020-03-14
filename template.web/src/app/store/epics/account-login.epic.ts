import { ActionsObservable, ofType } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';

import { LoginActions } from '../actions';
import { LoginActionTypes } from '../types';
import { authService } from '../../shared';
import { ILoginResponse } from '../../interfaces';

const accountLoginEpic = (action$: ActionsObservable<LoginActionTypes.Actions>) => action$.pipe(
    ofType<LoginActionTypes.Actions, LoginActionTypes.ILoginAction>(LoginActionTypes.Types.USER_LOGIN),
    mergeMap((action: LoginActionTypes.ILoginAction) =>
        authService.login(action.payload.email, action.payload.password)
            .pipe(
                map((result: ILoginResponse) => LoginActions.loginSuccessAction(result))
            )
    )
);

export default [
    accountLoginEpic
];