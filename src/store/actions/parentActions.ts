export const GET_REQUEST = 'GET_REQUEST'
export const GET_SUCCESS = 'GET_SUCCESS'
export const GET_FAILURE = 'GET_FAILURE'

export const getRequest = () => ({ type: GET_REQUEST })
export const getSuccess = (parent: any) => ({ type: GET_SUCCESS, payload: parent })
export const getFailure = (error: string) => ({ type: GET_FAILURE, payload: error })
