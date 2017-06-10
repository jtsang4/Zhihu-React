import React from 'react'

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
      </div>
    )
  }
}

export default UserNav
