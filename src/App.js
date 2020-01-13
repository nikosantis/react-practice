import React, {Component} from 'react'
import logo from './logo.svg'
import './App.css'

// const Hello = props => {
//   return <h2>{props.title}</h2>
// }

class Hello extends Component {
  render() {
    return <h2>{this.props.title}</h2>
  }
}

class Text extends Component {
  render() {

    const textSegunBool = this.props.isActivated ? 'On' : 'Off'
    const mappedNumbers = this.props.arrayOfNumbers.map(n => n * 2)

    return (
      <>
        <p>{this.props.text}</p>
        <p>{this.props.number}</p>
        <p>{mappedNumbers}</p>
        <p>{textSegunBool}</p>
        <p>{this.props.objectWithInfo.key}</p>
      </>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <Hello title='Hello Niko' />
          <Text
            arrayOfNumbers={[2, 3, 10]}
            objectWithInfo={{ key: 'First Value', key2: 'otherValue' }}
            isActivated
            number={2}
            text='Texto en String'
          />
        </header>
      </div>
    );
  }
}

export default App
