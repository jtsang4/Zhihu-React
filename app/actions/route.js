import * as routeActions from '../constants/route'

// 更新 store 中的 location
export function updateLocation(data) {
  return {
    type: routeActions.UPDATE_LOCATION,
    data
  }
}

// 更新 store 中的 match
export function updateMatch(data) {
  return {
    type: routeActions.UPDATE_MATCH,
    data
  }
}