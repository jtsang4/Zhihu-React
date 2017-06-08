import * as userInfos from 'app/constants/userInfo'

export function update(data) {
  return {
    type: userInfos.UPDATE_USER
    data
  }
}

export function reset() {
  return {
    type: userInfos.RESET_USER
  }
}
