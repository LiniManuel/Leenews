import {
    REGISTRAZIONE,
    LOGIN
} from "./constants";

export const registraAction = (payload) => {
    return {
        type: REGISTRAZIONE,
        payload
    }
}

export const loginAction = (payload) => {
    return {
        type: LOGIN,
        payload
    }
}