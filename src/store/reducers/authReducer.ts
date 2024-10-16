import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../actions/authActions'

interface AuthState {
    user: any
    error: string | null
    loading: boolean
}

const initialState: AuthState = {
    user: null,
    error: null,
    loading: false,
};

export const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, loading: true, error: null }
        case LOGIN_SUCCESS:
            return { ...state, user: action.payload, loading: false }
        case LOGIN_FAILURE:
            return { ...state, error: action.payload, loading: false }
        case LOGOUT:
            return { ...state, user: null, error: null, loading: false }
        default:
            return state
    }
};
