import * as userInfoActions from 'app/constants/userInfo'

const initialState = {}

export default function (state=initialState, action) {
  switch (action.type) {
    case userInfoActions.UPDATE_USER:
      return action.data
    case userInfoActions.RESET_USER:
      return initialState
    default:
      return state
  }
}
