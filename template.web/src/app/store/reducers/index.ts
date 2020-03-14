import { combineReducers } from 'redux';
import accountLoginReducer from './account-login.reducer';
import { IAppState } from '../../interfaces';

export default combineReducers<IAppState>({
    loginState: accountLoginReducer
});
