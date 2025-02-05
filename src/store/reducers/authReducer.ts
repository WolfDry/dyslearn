import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE } from '../actions/authActions'

interface AuthState {
  user: any
  error: string | null
  loading: boolean
}

const initialState: AuthState = {
  user: null,
  error: null,
  loading: false,
}

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null }
    case REGISTER_REQUEST:
      return { ...state, loading: true, error: null }
    case LOGOUT_REQUEST:
      return { ...state, loading: true, error: null }
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload, loading: false }
    case REGISTER_SUCCESS:
      return { ...state, user: action.payload, loading: false }
    case LOGIN_FAILURE:
      return { ...state, error: action.payload, loading: false }
    case REGISTER_FAILURE:
      return { ...state, error: action.payload, loading: false }
    case LOGOUT_FAILURE:
      return { ...state, error: action.payload, loading: false }
    case LOGOUT_SUCCESS:
      return { ...state, user: null, loading: false }
    default:
      return state
  }
}
