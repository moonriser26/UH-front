const SET_USER = 'SET_USER'
const SET_TOKEN = 'SET_TOKEN'

const defaultState = {
    //currentUser: {},
    isAuth: false,
    token: null
}

export default function userReducer(state = defaultState, action) {
    switch (action.type) {
        case SET_TOKEN:
            return {
                ...state,
                //currentUser: action.payload.user,
                isAuth:true,
                token: action.payload.key
            }
        default:
            return state
    }
}

export const setUser = user => ({type: SET_USER, payload: user})
export const setToken = key => ({type: SET_TOKEN, payload: key})