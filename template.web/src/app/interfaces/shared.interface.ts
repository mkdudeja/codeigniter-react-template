import { Action } from "redux";

export interface IError {
    status: (null | number);
    message: string
}

export interface IGenericAction {
    type: any;
    payload: any;
}
