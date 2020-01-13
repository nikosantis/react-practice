import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'

class Contador extends Component {
  state = { contador: 1 }

  render () {
    return <span>{this.state.contador}</span>
  }
}

class App extends Component {
  render () {
    return (
      <div className="App">
        <p>Primer component con state</p>
        <Contador />
      </div>
    )
  }
}

export default App
