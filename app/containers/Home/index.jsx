import React from 'react'

import './style.less'
import CommonHeader from 'components/CommonHeader'
import Feeds from './subpages/Feeds'

class Home extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="home">
        <CommonHeader pathname={this.props.location.pathname}/>
        <div className="main-content clearfix">
          <div className="feeds pull-left">
            <Feeds/>
          </div>
          <div className="sidebar pull-left">sidebar</div>
        </div>
      </div>
    )
  }
}

export default Home