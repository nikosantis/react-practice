import React, { Component } from 'react'
import BitCoinPrice from './presentational'

class BitCoinPriceContainer extends Component {
  state = { bpi: {} }

  componentDidMount () {

    const fetchData = async () => {
      const res = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json')
      const data = await res.json()
      const { bpi } = data
      this.setState({ bpi })
    }

    fetchData()
  }

  render () {
    return (
      <BitCoinPrice bpi={this.state.bpi} />
    )
  }
}

export default BitCoinPriceContainer
