import * as userInfoActions from '../constants/userInfo'

// 更新 store 中当前登陆的用户信息
export function update(data) {
  return {
    type: userInfoActions.UPDATE_USER,
    data
  }
}

// 清空 store 中保存的用户信息
export function reset() {
  return {
    type: userInfoActions.RESET_USER
  }
}
