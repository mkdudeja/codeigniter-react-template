import { ActionsObservable, ofType } from 'redux-observable';
import { mergeMap, map } from 'rxjs/operators';

import { accountLoginActions } from '../actions';
import { accountLoginConstants } from '../constants';
import { authService } from '../../shared';

import { ILoginResponse } from '../../interfaces';

export default (action$: ActionsObservable<accountLoginConstants.Actions>) => action$.pipe(
    ofType<accountLoginConstants.Actions, accountLoginConstants.ILoginAction>(accountLoginConstants.Types.USER_LOGIN),
    mergeMap((action: accountLoginConstants.ILoginAction) =>
        authService.login(action.payload.email, action.payload.password)
            .pipe(
                map((result: ILoginResponse) => accountLoginActions.loginSuccessAction(result))
            )
    )
);
