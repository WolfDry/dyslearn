export const GET_REQUEST = 'GET_REQUEST'
export const GET_SUCCESS = 'GET_SUCCESS'
export const GET_FAILURE = 'GET_FAILURE'
export const UPDATE_PATH = 'UPDATE_PATH'

export const getRequest = () => ({ type: GET_REQUEST })
export const getSuccess = (path: any) => ({ type: GET_SUCCESS, payload: path })
export const getFailure = (error: string) => ({ type: GET_FAILURE, payload: error })
export const updatePath = (newPath: object) => ({
  type: UPDATE_PATH,
  payload: newPath
})