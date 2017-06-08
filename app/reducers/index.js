// 根reducer，在此组装所有reducer
import {combineReducers} from 'redux'

import userInfoReducer from './userInfo'

export default combineReducers({
  userInfo: userInfoReducer
})
