import { supabase } from '../../../supabase'
import {
  loginRequest, loginSuccess, loginFailure,
  registerRequest, registerSuccess, registerFailure,
  logoutRequest, logoutSuccess, logoutFailure
} from '../actions/authActions'

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  proName: string;
  securityPassword: string;
  confirmSecurityPassword: string;
}

export const login = (email: string, password: string) => async (dispatch: any) => {
  dispatch(loginRequest())
  try {
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      dispatch(loginFailure(error.message))
      throw error
    }
    dispatch(loginSuccess(data.user))
  } catch (error: any) {
    dispatch(loginFailure(error.message))
    throw error
  }
}

export const register = (formData: FormData) => async (dispatch: any) => {
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
    dispatch(registerSuccess(data.user))
  } catch (error: any) {
    dispatch(registerFailure(error.message))
    throw error
  }
}

export const logout = () => async (dispatch: any) => {
  dispatch(logoutRequest())
  try {
    await supabase.auth.signOut()
    dispatch(logoutSuccess())
  } catch (error: any) {
    dispatch(logoutFailure(error.message))
    throw error
  }
}
