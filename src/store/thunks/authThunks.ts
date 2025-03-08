import { supabase } from '../../../supabase'
import {
  loginRequest, loginSuccess, loginFailure,
  registerRequest, registerSuccess, registerFailure,
  logoutRequest, logoutSuccess, logoutFailure,
  registerChildrenRequest,
  registerChildrenFailure,
  registerChildrenSuccess,
  insertReportRequest,
  insertReportFailure,
  insertReportSuccess
} from '../actions/authActions'

type FormData = {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  proName: string
  securityPassword: string
  confirmSecurityPassword: string
}

export const login = (email: string, password: string) => async (dispatch) => {
  dispatch(loginRequest())
  try {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      dispatch(loginFailure(error.message))
      throw error
    }
    const userData = await supabase
      .from('parents')
      .select('*, children(*, reports(*))')
      .eq('id', data.user.id)
    if (userData.error) {
      dispatch(registerFailure(error.message))
      throw userData.error
    }
    dispatch(loginSuccess(userData.data[0]))
  } catch (error: any) {
    dispatch(loginFailure(error.message))
    throw error
  }
}

export const register = (formData: FormData) => async (dispatch) => {
  dispatch(registerRequest())

  const { email, password, firstName, lastName } = formData

  try {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName
        }
      }
    })

    if (error) {
      dispatch(registerFailure(error.message))
      throw error
    }
    const userData = await supabase
      .from('parents')
      .select('*, children(*, reports(*))')
      .eq('id', data.user.id)
    if (userData.error) {
      dispatch(registerFailure(error.message))
      throw userData.error
    }
    dispatch(registerSuccess(userData.data[0]))
  } catch (error: any) {
    dispatch(registerFailure(error.message))
    throw error
  }
}

export const childrenRegister = (children) => async (dispatch, getState) => {
  dispatch(registerChildrenRequest())
  try {
    const { data, error } = await supabase
      .from('children')
      .insert(children)
      .select()
    const { auth } = getState()
    auth.user.children = data
    if (error) {
      dispatch(registerChildrenFailure(error.message))
      throw error
    }
    dispatch(registerChildrenSuccess(auth.user))
  } catch (error: any) {
    dispatch(registerChildrenFailure(error.message))
    throw error
  }
}

export const insertReport = (report) => async (dispatch, getState) => {
  dispatch(insertReportRequest())

  try {
    const { auth } = getState()
    report.children_id = auth.user.children[0].id

    const { data, error } = await supabase.from("reports").insert(report).select()

    if (error) {
      dispatch(insertReportFailure(error.message))
      throw error
    }

    dispatch(insertReportSuccess(data[0]))
  } catch (error) {
    dispatch(insertReportFailure(error.message))
    throw error
  }
}

export const logout = () => async (dispatch) => {
  dispatch(logoutRequest())
  try {
    await supabase.auth.signOut()
    dispatch(logoutSuccess())
  } catch (error: any) {
    dispatch(logoutFailure(error.message))
    throw error
  }
}
