import React, { Component } from 'react'
import Explore from '../components/Explore'
import { browserHistory } from 'react-router'

class App extends Component {
  handleChange = nextValue => {
    browserHistory.push(`/${nextValue}`)
  }

  render() {
   const inputValue = window.location.pathname.substring(1);

    return (
      <div>
        <Explore value={inputValue} onChange={this.handleChange} />
      </div>
    )
  }
}

export default App
