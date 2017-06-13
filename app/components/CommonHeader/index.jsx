// 基本的上方导航组件，需要传递userInfo
import React from 'react'
import {Link} from 'react-router-dom'

import UserNav from 'components/UserNav'
import './style.less'

class CommonHeader extends React.PureComponent {
  constructor (props) {
    super(props)
  }
  render () {
    return (
      <header id="common-header">
        <div className="header-wrap clearfix">
          <div className="pull-left full-height">
            <a className="zhihu-logo pointer inline-block"></a>
            <div className="search inline-block full-height relative">
              <input type="text" placeholder="搜索你感兴趣的内容..."/>
              <button type="button" className="absolute">
                <span className="sprite-global-icon-magnifier-dark"></span>
              </button>
            </div>
            <ul className="navs inline-block clearfix">
              <li className={this.props.pathname === '/' ? 'inline-block active' : 'inline-block'}>
                <Link to="/">
                  <span className="nav pointer inline-block">首页</span>
                </Link>
              </li>
              <li className={this.props.pathname.indexOf('/topic') === 0 ? 'inline-block active' : 'inline-block'}>
                <Link to="/topic">
                  <span className="nav pointer inline-block">话题</span>
                </Link>
              </li>
              <li className={this.props.pathname.indexOf('/explore') === 0 ? 'inline-block active' : 'inline-block'}>
                <Link to="/explore">
                  <span className="nav pointer inline-block">发现</span>
                </Link>
              </li>
              <li className="inline-block">
                <span className="nav pointer inline-block">消息</span>
              </li>
            </ul>
          </div>
          <div className="pull-right full-height">
            <button type="button" className="ask"><span>提问</span></button>
            <UserNav userInfo={this.props.userInfo}/>
          </div>
        </div>
      </header>
    )
  }
}

export default CommonHeader
