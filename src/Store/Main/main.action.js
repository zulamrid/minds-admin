import { dispatch_action } from "./main.helper" ;

export const setActive = (payload) => {
    return (dispatch) => {
        dispatch({
            type : dispatch_action.SET_ACTIVE,
            payload
        })
    }
}

export const setMenuActive = (payload) => {
    return (dispatch) => {
        console.log(payload)
        dispatch({
            type : dispatch_action.SET_MENU_ACTIVE,
            payload
        })
    }
}