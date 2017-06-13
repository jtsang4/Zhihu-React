// 头部导航中的用户导航组件，需要传递userInfo信息
import React from 'react'
import {Link} from 'react-router-dom'

import './style.less'

class UserNav extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="user-nav" className="inline-block pointer">
        <a className="title inline-block">
          <img className="avatar" src={this.props.userInfo.avatar} alt="头像"/>
          <span className="name">{this.props.userInfo.username}</span>
        </a>
        <ul className="user-menus">
          <li className="user-menu">
            <Link to="/people">
              <i className="sprite-normal-icon-home"></i>
              <span>我的主页</span>
            </Link>
          </li>
          <li className="user-menu">
            <Link to="/inbox">
              <i className="sprite-normal-icon-pm"></i>
              <span>消息</span>
            </Link>
          </li>
          <li className="user-menu">
            <Link to="/settings">
              <i className="sprite-normal-icon-settings"></i>
              <span>设置</span>
            </Link>
          </li>
          <li className="user-menu">
            <a href="/logout">
              <i className="sprite-normal-icon-logout"></i>
              <span>退出</span>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default UserNav
