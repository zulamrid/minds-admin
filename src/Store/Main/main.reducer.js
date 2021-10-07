import { dispatch_action } from './main.helper';

const initialState = {
    active: 'admin',
    menu_active: 0,
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case dispatch_action.SET_ACTIVE:
            return {
                ...state,
                active: action.payload
            }
        case dispatch_action.SET_MENU_ACTIVE:
            return {
                ...state,
                menu_active: action.payload
            }
        default:
            return state
    }
}

export default reducer