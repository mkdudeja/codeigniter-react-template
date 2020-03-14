import { accountLoginConstants } from "../constants";
import { ILoginResponse } from "../../interfaces";

const initialState: ILoginResponse = {
    accessToken: null,
    userInfo: null
};

export default (state: ILoginResponse = initialState, action: accountLoginConstants.Actions): ILoginResponse => {
    switch (action.type) {
        case accountLoginConstants.Types.USER_LOGIN_SUCCESS:
            return {
                ...state,
                accessToken: action.payload.accessToken,
                userInfo: action.payload.userInfo
            };

        default:
            return state
    }
}