import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, REGISTER_REQUEST, REGISTER_SUCCESS, REGISTER_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAILURE, REGISTER_CHILDREN_REQUEST, REGISTER_CHILDREN_SUCCESS, REGISTER_CHILDREN_FAILURE, INSERT_REPORT_REQUEST, INSERT_REPORT_FAILURE, INSERT_REPORT_SUCCESS } from '../actions/authActions'

interface AuthState {
  user: any
  reports: Array<Object>
  error: string | null
  loading: boolean
}

const initialState: AuthState = {
  user: null,
  reports: [],
  error: null,
  loading: false,
}

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null }
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload, loading: false }
    case LOGIN_FAILURE:
      return { ...state, error: action.payload, loading: false }

    case REGISTER_REQUEST:
      return { ...state, loading: true, error: null }
    case REGISTER_SUCCESS:
      return { ...state, user: action.payload, loading: false }
    case REGISTER_FAILURE:
      return { ...state, error: action.payload, loading: false }

    case REGISTER_CHILDREN_REQUEST:
      return { ...state, loading: true, error: null }
    case REGISTER_CHILDREN_SUCCESS:
      return { ...state, user: action.payload, loading: false }
    case REGISTER_CHILDREN_FAILURE:
      return { ...state, error: action.payload, loading: false }

    case LOGOUT_REQUEST:
      return { ...state, loading: true, error: null }
    case LOGOUT_SUCCESS:
      return { ...state, user: null, loading: false }
    case LOGOUT_FAILURE:
      return { ...state, error: action.payload, loading: false }

    case INSERT_REPORT_REQUEST:
      return { ...state, loading: true, error: null }
    case INSERT_REPORT_SUCCESS:
      return { ...state, reports: [...state.reports, action.payload], loading: false }
    case INSERT_REPORT_FAILURE:
      return { ...state, error: action.payload, loading: false }

    default:
      return state
  }
}
