export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'
export const REGISTER_REQUEST = 'REGISTER_REQUEST'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_FAILURE = 'REGISTER_FAILURE'
export const REGISTER_CHILDREN_REQUEST = 'REGISTER_CHILDREN_REQUEST'
export const REGISTER_CHILDREN_SUCCESS = 'REGISTER_CHILDREN_sUCCESS'
export const REGISTER_CHILDREN_FAILURE = 'REGISTER_CHILDREN_FAILURE'
export const LOGOUT_REQUEST = 'LOGOUT_REQUEST'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'
export const LOGOUT_FAILURE = 'LOGOUT_FAILURE'
export const INSERT_REPORT_REQUEST = 'INSERT_REPORT_REQUEST'
export const INSERT_REPORT_SUCCESS = 'INSERT_REPORT_SUCCESS'
export const INSERT_REPORT_FAILURE = 'INSERT_REPORT_FAILURE'

export const loginRequest = () => ({ type: LOGIN_REQUEST })
export const loginSuccess = (user: any) => ({ type: LOGIN_SUCCESS, payload: user })
export const loginFailure = (error: string) => ({ type: LOGIN_FAILURE, payload: error })

export const registerRequest = () => ({ type: REGISTER_REQUEST })
export const registerSuccess = (children: any) => ({ type: REGISTER_SUCCESS, payload: children })
export const registerFailure = (error: string) => ({ type: REGISTER_FAILURE, payload: error })

export const registerChildrenRequest = () => ({ type: REGISTER_CHILDREN_REQUEST })
export const registerChildrenSuccess = (user: any) => ({ type: REGISTER_CHILDREN_SUCCESS, payload: user })
export const registerChildrenFailure = (error: string) => ({ type: REGISTER_CHILDREN_FAILURE, payload: error })

export const logoutRequest = () => ({ type: LOGOUT_REQUEST })
export const logoutSuccess = () => ({ type: LOGOUT_SUCCESS })
export const logoutFailure = (error: string) => ({ type: LOGOUT_FAILURE, payload: error })

export const insertReportRequest = () => ({ type: INSERT_REPORT_REQUEST })
export const insertReportSuccess = (report: any) => ({ type: INSERT_REPORT_SUCCESS, payload: report })
export const insertReportFailure = (error: string) => ({ type: INSERT_REPORT_FAILURE, payload: error })