import { GET_REQUEST, GET_SUCCESS, GET_FAILURE, UPDATE_PATH } from "../actions/pathActions"

interface PathState {
  path: any
  error: string | null
  loading: boolean
}

const initialState: PathState = {
  path: null,
  error: null,
  loading: false,
}

export const pathReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_REQUEST:
      return { ...state, loading: true, error: null }
    case GET_SUCCESS:
      return { ...state, path: action.payload, loading: false }
    case GET_FAILURE:
      return { ...state, error: action.payload, loading: false }
    case UPDATE_PATH:
      return { ...state, path: action.payload }
    default:
      return state
  }
}
