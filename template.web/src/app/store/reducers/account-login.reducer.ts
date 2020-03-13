import { LoginActionTypes } from "../types";

export default (state = {}, action: LoginActionTypes.Actions) => {
    switch (action.type) {
        case LoginActionTypes.Types.USER_LOGIN:
            return {
                result: action.payload
            };

        default:
            return state
    }
}