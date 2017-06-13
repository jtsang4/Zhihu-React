// 侧边栏导航中的用户信息入口
import React from 'react'
import {connect} from 'react-redux'

import './style.less'

class UserEntry extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="user-entry">
        <ul>
          <li>
            <i></i>
            <span>我的收藏</span>
          </li>
          <li>
            <i></i>
            <span>我关注的问题</span>
          </li>
          <li>
            <i></i>
            <span>邀请我回答的问题</span>
          </li>
          <li>
            <i></i>
            <span>我的余额</span>
          </li>
          <li>
            <i></i>
            <span>我的礼券</span>
          </li>
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    userInfo: state.userInfo
  }
}

export default connect(
  mapStateToProps
)(UserEntry)
