import { UPDATE_PATH } from "../actions/pathActions"

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
    case UPDATE_PATH:
      return { ...state, path: action.payload }
    default:
      return state
  }
}
