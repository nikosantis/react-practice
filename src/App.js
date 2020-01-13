import React, { Component } from 'react'

class App extends Component {
  handleClick (e) {
    console.log(e)
    console.log(e.nativeEvent)
    alert('Hi there!')
  }
  render () {

    return (
      <div className="App">
        <h4>Eventos</h4>
        <button onClick={this.handleClick}>Hi there!</button>
      </div>
    )
  }
}

export default App
