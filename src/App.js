import React, {Component} from 'react'

class Contador extends Component {
  constructor (props) {
    super(props)
    console.log(props)
    this.state = { contador: this.props.contadorInicial }

    setInterval(() => {
      this.setState({ contador: this.state.contador + 1 })
    }, 1000)
  }

  render () {
    return <ContadorNumero numero={this.state.contador} />
  }
}

Contador.defaultProps = {
  contadorInicial: 100
}

class ContadorNumero extends Component {
  render () {
    console.log('ContadorNumero render()')
    return <span>{this.props.numero}</span>
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
