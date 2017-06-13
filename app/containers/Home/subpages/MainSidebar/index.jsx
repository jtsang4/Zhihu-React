import React from 'react'
import {connect} from 'react-redux'
// import {Link} from 'react-router-dom'

import './style.less'
import UserEntry from './UserEntry'

class MainSidebar extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="main-sidebar">
        <UserEntry/>
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
