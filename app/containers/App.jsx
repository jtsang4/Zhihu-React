import React from 'react'
import {Route} from 'react-router-dom'

// 引入css
import 'normalize.css' // 引入normalize.css
import 'assets/css/pure/pure.css' //引入 purecss
import 'assets/css/common.less' // 引入自己定义的基本样式

import Home from './Home'
import Hello from './Hello'

class App extends React.PureComponent {
  render() {
    return (
      <div>
        <Route path="/" component={Home}/>
        <Route path="/hello" component={Hello}/>
      </div>
    )
  }
}

export default App
