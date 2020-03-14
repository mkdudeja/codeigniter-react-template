export interface IUserInfo {
    name: string;
    email: string;
    roles: Array<string>;
}

export interface IUserLogin {
    email: string;
    password: string;
}

export interface ILoginResponse {
    accessToken: string;
    userInfo: IUserInfo;
};
