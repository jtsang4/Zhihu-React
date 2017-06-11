import * as routeActions from '../constants/route'

const initialState = {
  location: {},
  match: {}
}

export default function(state=initialState, action) {
  switch (action.type) {
    case routeActions.UPDATE_LOCATION:
      return Object.assign(state, {
        location: action.data
      })
    case routeActions.UPDATE_MATCH:
      return Object.assign(state, {
        match: action.data
      })
    default:
      return state
  }
}