import * as userInfos from 'app/constants/userInfo'

const initialState = {}

export default function (state=initialState, action) {
  switch (action.type) {
    case userInfos.UPDATE_USER:
      return data
      break;
    case userInfos.RESET_USER:
      return initialState
      break;
    default:
      return state
  }
}
