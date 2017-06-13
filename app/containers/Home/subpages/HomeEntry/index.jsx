// 首页用户的提问，回答导航入口，需要传递userInfo
import React from 'react'
import {connect} from 'react-redux'

import './style.less'

class HomeEntry extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="home-entry" className="clearfix">
        <div className="home-entry-avatar pull-left">
          <img src={this.props.userInfo.avatar} alt="头像"/>
        </div>
        <div className="home-entry-box relative clearfix">
          <span className="home-entry-box-arrow"></span>
          <ul className="pull-left">
            <li className="home-entry-item inline-block relative">
              <a className="pointer">
                <i className="sprite-home-icon-question-off"></i>
                <span>提问</span>
              </a>
            </li>
            <li className="home-entry-item inline-block relative">
              <a className="pointer">
                <i className="sprite-home-icon-answer-off"></i>
                <span>回答</span>
              </a>
            </li>
            <li className="home-entry-item inline-block relative">
              <a className="pointer">
                <i className="sprite-home-icon-post-off"></i>
                <span>写文章</span>
              </a>
            </li>
          </ul>
          <a className="pull-right"><span className="draft pointer">草稿</span></a>
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
)(HomeEntry)
