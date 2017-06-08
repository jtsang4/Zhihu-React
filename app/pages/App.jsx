import React from 'react'
import {Route, Link} from 'react-router-dom'

import Home from './Home'
import Hello from './Hello'

class App extends React.PureComponent {
  render () {
    return (
      <div>
        <Link to="/home">home</Link>
        <Link to="/hello">hello</Link>
        <Route path="/home" component={Home} />
        <Route path="/hello" component={Hello} />
      </div>
    )
  }
}

export default App
