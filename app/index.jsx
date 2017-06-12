// 项目入口，在此引入 store
/* global __ENV__ */

import React from 'react'
import {render} from 'react-dom'
import {Provider} from 'react-redux'
import {HashRouter as Router} from 'react-router-dom'

// 引入css
import 'normalize.css' // 引入normalize.css
import 'assets/css/pure/pure.css' //引入 purecss
import 'assets/css/common.less' // 引入自己定义的基本样式
import storeGen from './store'
import App from 'containers/App'

const reduxStore = storeGen() // 创建一个store实例

// 在开发环境下模拟一个当前登陆用户
if(__ENV__ === 'development') {
  localStorage.setItem('loginUserInfo', JSON.stringify({
    username: '包子',
    userId: 'this-is-a-test-id',
    avatar: '/dynamic/imgs/avatar.jpg'
  }))
}

render(
  <Provider store={reduxStore}>
    <Router>
      <App/>
    </Router>
  </Provider>,
  document.getElementById('app')
)
