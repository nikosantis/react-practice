import React, { Component } from 'react'
import PropTypes from 'prop-types'

const ANIMAL_IMAGES = {
  panda: 'https://goo.gl/oNbtoq',
  cat: 'https://goo.gl/PoQQXb',
  dolphin: 'https://goo.gl/BbiKCd'
}

class AnimalImage extends Component {
  state = { src: ANIMAL_IMAGES[this.props.animal] }

  componentWillReceiveProps (nextProps) {
    // nextProps pueden ser las mismas props que tenemos
    // pero entrará igualmente a este método
    // Nuevas Props no quiere decir que sean distintas
    // a las que teníamos
    console.log('componentWillReceiveProps')
    console.log(nextProps)
    this.setState({ src: ANIMAL_IMAGES[nextProps.animal] })
  }

  render () {
    console.log('-> render')
    return (
      <div>
        <p>Selected {this.props.animal}</p>
        <img
          alt={this.props.animal}
          src={this.state.src}
          width='250'
        />
      </div>
    )
  }
}

AnimalImage.propTypes = {
  animal: PropTypes.oneOf([ 'cat', 'dolphin', 'panda'])
}

AnimalImage.defaultProps = {
  animal: 'panda'
}

class EjemploDeCicloDeActualizacion extends Component {
  state = { animal: 'panda' }

  render () {
    return (
      <div>
        <h4>Ciclo de Actualización, ejemplo de: ComponentWillReceiveProps</h4>
        <button onClick={() => this.setState({ animal: 'panda' })}>
          Panda
        </button>
        <button onClick={() => this.setState({ animal: 'cat' })}>
          Cat
        </button>
        <button onClick={() => this.setState({ animal: 'dolphin' })}>
          Dolphin
        </button>
        <AnimalImage animal={this.state.animal} />
      </div>
    )
  }
}

export default EjemploDeCicloDeActualizacion
