import { combineEpics } from 'redux-observable';
import { catchError } from 'rxjs/operators';

import accountLoginEpic from './account-login.epic';

export default (action$: any, store$: any, dependencies: any) =>
    combineEpics(...[accountLoginEpic])(action$, store$, dependencies).pipe(
        catchError((error, source) => {
            console.error(error);
            return source;
        })
    );
