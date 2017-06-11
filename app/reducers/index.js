// 根reducer，在此组装所有reducer
import {combineReducers} from 'redux'

import userInfoReducer from './userInfo'
import routeReducer from './route'

export default combineReducers({
  userInfo: userInfoReducer,
  route: routeReducer
})
