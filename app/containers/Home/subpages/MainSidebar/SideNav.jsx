// 侧边栏导航中的用户信息入口
import React from 'react'
import {connect} from 'react-redux'

import './style.less'

class SideNav extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="side-nav-bar" className="side-nav-group">
        <ul className="nav-items">
          <li className="nav-item">
            <a className="nav-item-link pointer">
              <i className="zg-icon zg-icon-sidenav-fav"></i>
              <span>我的收藏</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-item-link pointer">
              <i className="zg-icon zg-icon-sidenav-follow"></i>
              <span>我关注的问题</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-item-link pointer">
              <i className="zg-icon zg-icon-sidenav-invite"></i>
              <span>邀请我回答的问题</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-item-link pointer">
              <i className="icon-purse"></i>
              <span>我的余额</span>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-item-link pointer">
              <i className="icon-coupon"></i>
              <span>我的礼券</span>
            </a>
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
)(SideNav)
