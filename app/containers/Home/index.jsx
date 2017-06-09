import React from 'react'

import CommonHeader from 'components/CommonHeader'
import './style.less'

class Home extends React.PureComponent {
  render () {
    return (
      <div id="home">
        <CommonHeader/>
      </div>
    )
  }
}

export default Home
