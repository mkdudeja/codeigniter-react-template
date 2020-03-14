import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { appConstants } from '../config';
import { networkService } from './network.service';
import { ILoginResponse, IUserInfo } from '../../interfaces';

class AuthService {
    private static _instance: AuthService;

    public token: null | string = null;
    public userInfo: null | IUserInfo = null;

    private constructor() { }

    public static getInstance(): AuthService {
        if (!AuthService._instance) {
            AuthService._instance = new AuthService();
        }

        return AuthService._instance;
    }

    getToken() {
        return this.token;
    }

    login(email: string, password: string): Observable<ILoginResponse> {
        const data = {
            email, password
        };
        return networkService.post<ILoginResponse>(appConstants.urls.login, data)
            .pipe(
                map((response: ILoginResponse) => {
                    this.token = response.accessToken;
                    this.userInfo = response.userInfo;
                    return response;
                })
            );
    }
}

export const authService = AuthService.getInstance();
