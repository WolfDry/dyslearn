export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'

export const loginRequest = () => ({ type: LOGIN_REQUEST })
export const loginSuccess = (user: any) => ({ type: LOGIN_SUCCESS, payload: user })
export const loginFailure = (error: string) => ({ type: LOGIN_FAILURE, payload: error })

export const registerRequest = () => ({ type: REGISTER_REQUEST })
export const registerSuccess = (user: any) => ({ type: REGISTER_SUCCESS, payload: user })
export const registerFailure = (error: string) => ({ type: REGISTER_FAILURE, payload: error })

export const logoutRequest = () => ({ type: LOGOUT_REQUEST })
export const logoutSuccess = () => ({ type: LOGOUT_SUCCESS })
export const logoutFailure = (error: string) => ({ type: LOGOUT_FAILURE })