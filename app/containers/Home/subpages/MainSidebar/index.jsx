import React from 'react'
import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'

import './style.less'
import SideNav from './SideNav'

class MainSidebar extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="main-sidebar">
        <SideNav/>
        <div className="side-nav-group border-side-nav-group">
          <ul className="nav-items">
            <li className="nav-item">
              <a className="nav-item-link pointer">
                <i className="zg-icon zg-icon-sidenav-publicedit"></i>
                <span>公共编辑动态</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-item-link pointer">
                <i className="z-sidenav-icon z-sidenav-icon-community"></i>
                <span>社区服务中心</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-item-link pointer">
                <i className="icon-copyright"></i>
                <span>版权服务中心</span>
              </a>
            </li>
          </ul>
        </div>
        <div className="side-nav-group border-side-nav-group">
          <h3 className="block-title">知乎专栏</h3>
          <ul className="zl-items">
            <li className="zl-item">
              <a className="zl-item-link pointer">
                <i className="z-icon-list z-icon-list-normal"></i>
                <span>专栏・发现</span>
              </a>
            </li>
          </ul>
        </div>
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
)(MainSidebar)
