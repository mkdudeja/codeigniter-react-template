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

    login(username: string, password: string): Promise<ILoginResponse> {
        const data = {
            username, password
        };
        return networkService.post<ILoginResponse>(appConstants.urls.login, data)
            .then((response: ILoginResponse) => {
                this.token = response.token;
                this.userInfo = response.userInfo;
                return response;
            });
    }
}

export const authService = AuthService.getInstance();
