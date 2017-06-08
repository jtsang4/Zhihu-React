import {createStore} from 'redux'
import rootReducer from 'app/reducers'

export default function (initialState) {
  const store = createStore(rootReducer, initialState,
    // 触发redux-dev-tools
    window.devToolsExtension ? window.devToolsExtension() : undefined
  )
  return store
}
