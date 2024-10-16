// actions/authActions.ts
export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const LOGOUT = 'LOGOUT'

export const loginRequest = () => ({ type: LOGIN_REQUEST })
export const loginSuccess = (user: any) => ({ type: LOGIN_SUCCESS, payload: user })
export const loginFailure = (error: string) => ({ type: LOGIN_FAILURE, payload: error })
export const logoutAction = () => ({ type: LOGOUT })
