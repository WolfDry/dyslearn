import { TYPO_FAILURE, TYPO_REQUEST, TYPO_SUCCESS, UPDATE_TYPO } from '../actions/typoActions'

interface AuthState {
  typo: string
  error: string | null
  loading: boolean
}

const initialState: AuthState = {
  typo: 'Verdana',
  error: null,
  loading: false,
}

export const typoReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case TYPO_REQUEST:
      return { ...state, loading: true, error: null }
    case TYPO_SUCCESS:
      return { ...state, user: action.payload, loading: false }
    case TYPO_FAILURE:
      return { ...state, error: action.payload, loading: false }
    case UPDATE_TYPO:
      return { ...state, typo: action.payload }
    default:
      return state
  }
}
