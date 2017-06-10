import React from 'react'

import CommonHeader from 'components/CommonHeader'
import './style.less'

class Home extends React.PureComponent {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div id="home">
        <CommonHeader pathname={this.props.location.pathname}/>
      </div>
    )
  }
}

export default Home
