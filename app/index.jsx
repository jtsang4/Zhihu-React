// 项目入口，在此引入 store 和引入跟路由
import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {HashRouter as Router, Route} from 'react-router-dom'
import storeGen from './store'

import App from 'containers/App'

const store = storeGen() // 创建一个store实例

render(
  <Provider store={store}>
    <Router>
      <Route path="/" component={App}/>
    </Router>
  </Provider>,
  document.getElementById('app')
)
