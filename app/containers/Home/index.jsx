import React from 'react'
import {connect} from 'react-redux'

import './style.less'
import CommonHeader from 'components/CommonHeader'
import HomeEntry from './subpages/HomeEntry'
import Feeds from './subpages/Feeds'
import MainSidebar from './subpages/MainSidebar'

class Home extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="home">
        <CommonHeader pathname={this.props.location.pathname} userInfo={this.props.userInfo}/>
        <div className="main clearfix">
          <div className="main-container pull-left">
            <div className="main-content">
              <HomeEntry/>
              <Feeds/>
            </div>
          </div>
          <div className="sidebar pull-left">
            <MainSidebar/>
          </div>
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
