import { supabase } from '../../../supabase'
import { getRequest, getSuccess, getFailure } from '../actions/parentActions'

export const getParent = () => async (dispatch: any) => {
  dispatch(getRequest())
  try {
    const { data, error } = await supabase
      .from('parents')
      .select()
    if (error) throw error
    dispatch(getSuccess(data))
  } catch (error: any) {
    dispatch(getFailure(error.message))
  }
}

export const getParentByEmail = (email: string) => async (dispatch: any) => {
  dispatch(getRequest())
  try {
    const { data, error } = await supabase
      .from('parents')
      .select()
      .eq('email', email)
    if (error) throw error
    dispatch(getSuccess(data))
  } catch (error: any) {
    dispatch(getFailure(error.message))
  }
}