// 在此定义路由
import React from 'react'
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import {Route} from 'react-router-dom'

import * as userInfoActions from 'app/actions/userInfo'

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
  componentWillMount() {
    const context = this

    // 如果存在当前登陆用户，则设置当前登陆用户信息
    const userInfo = localStorage.getItem('loginUserInfo')
    if (userInfo) {
      context.props.userInfoActions.update(JSON.parse(userInfo))
    }
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  }
}

function mapDispathToProps(dispatch) {
  return {
    userInfoActions: bindActionCreators(userInfoActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispathToProps
)(App)
