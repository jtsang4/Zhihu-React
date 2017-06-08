import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {HashRouter as Router, Route} from 'react-router-dom'
import storeGen from './store'

import App from 'pages/App'

const store = storeGen() // 创建一个store实例

render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App} />
    </Router>
  </Provider>,
  document.getElementById('app')
)
