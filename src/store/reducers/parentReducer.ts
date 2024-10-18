import { GET_REQUEST, GET_SUCCESS, GET_FAILURE } from "../actions/parentActions"

interface ParentState {
  parent: any
  error: string | null
  loading: boolean
}

const initialState: ParentState = {
  parent: null,
  error: null,
  loading: false,
}

export const parentReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_REQUEST:
      return { ...state, loading: true, error: null }
    case GET_SUCCESS:
      return { ...state, parent: action.payload, loading: false }
    case GET_FAILURE:
      return { ...state, error: action.payload, loading: false }
    default:
      return state
  }
}
