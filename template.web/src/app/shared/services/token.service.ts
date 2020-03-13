import { authService } from './auth.service';

class TokenService {
    private static _instance: TokenService;

    private constructor() { }

    public static getInstance(): TokenService {
        if (!TokenService._instance) {
            TokenService._instance = new TokenService();
        }

        return TokenService._instance;
    }

    getToken() {
        let token = authService.getToken();
        if (token !== null) {
            token = `Bearer ${token}`
        }

        return token;
    }
}

export const tokenService = TokenService.getInstance();
