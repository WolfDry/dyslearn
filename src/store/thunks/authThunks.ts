import { supabase } from '../../../supabase'
import { loginRequest, loginSuccess, loginFailure, logoutAction } from '../actions/authActions'

export const login = (email: string, password: string) => async (dispatch: any) => {
    dispatch(loginRequest())
    try {
        const { data, error } = await supabase.auth.signInWithPassword({ email, password })
        if (error) throw error
        dispatch(loginSuccess(data.user))
    } catch (error: any) {
        dispatch(loginFailure(error.message))
    }
}

export const logout = () => async (dispatch: any) => {
    await supabase.auth.signOut()
    dispatch(logoutAction())
}