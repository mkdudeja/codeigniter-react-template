export interface IUserInfo {
    name: string;
    email: string;
    roles: Array<string>;
}

export interface ILoginResponse {
    token: string;
    userInfo: IUserInfo;
}

export interface IUserLogin {
    email: string;
    password: string;
}
