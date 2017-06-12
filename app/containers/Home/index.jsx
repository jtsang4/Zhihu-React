import React from 'react'
import {connect} from 'react-redux'

import './style.less'
import CommonHeader from 'components/CommonHeader'
import HomeEntry from 'components/HomeEntry'
import Feeds from './subpages/Feeds'

class Home extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="home">
        <CommonHeader pathname={this.props.location.pathname}/>
        <div className="main clearfix">
          <div className="main-container pull-left">
            <div className="main-content">
              <HomeEntry userInfo={this.props.userInfo}/>
              <Feeds/>
            </div>
          </div>
          <div className="sidebar pull-left">sidebar</div>
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
)(Home)
