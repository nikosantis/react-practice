import React, { Component } from 'react'

class ComponenteDesmontar extends Component {
  state = { windowWidth: 0 }

  _updateStateWithWindowWidth = () => {
    console.log('_updateStateWithWindowWidth')
    this.setState({ windowWidth: document.body.clientWidth })
  }

  componentDidMount () {
    this._updateStateWithWindowWidth()
    window.addEventListener(
      'resize',
      this._updateStateWithWindowWidth
    )
  }

  componentWillUnmount () {
    console.log('componentWillUnmount')
    window.removeEventListener(
      'resize',
      this._updateStateWithWindowWidth
    )
  }
  render () {
    return (
      <div>
        <p>Ancho de la ventana: {this.state.windowWidth}</p>
      </div>
    )
  }
}

class EjemploDeComponentWillUnmount extends Component {
  state = { mostrarComponente: true }

  render () {
    if (this.state.mostrarComponente) {
      return (
        <div>
          <h4>Ciclo de desmontaje: componentWillUnmount</h4>
          <ComponenteDesmontar />
          <button onClick={() => this.setState({ mostrarComponente: false })}>
            Desmontar componente
          </button>
        </div>
      )
    }

    return (
      <p>Componente desmontado</p>
    )
  }
}

export default EjemploDeComponentWillUnmount
