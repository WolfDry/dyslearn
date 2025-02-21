export const TYPO_REQUEST = 'TYPO_REQUEST'
export const TYPO_SUCCESS = 'TYPO_SUCCESS'
export const TYPO_FAILURE = 'TYPO_FAILURE'
export const UPDATE_TYPO = 'UPDATE_TYPO'

export const typoRequest = () => ({ type: TYPO_REQUEST })
export const typoSuccess = (typo: any) => ({ type: TYPO_SUCCESS, payload: typo })
export const typoFailure = (error: string) => ({ type: TYPO_FAILURE, payload: error })
export const updateTypo = (newTypo: string) => ({ type: UPDATE_TYPO, payload: newTypo })