import React, { Component } from 'react'

class BitCoinPrice extends Component {
  _renderCurrencies () {
    const { bpi } = this.props

    const currencies = Object.keys(bpi) // ['EUR', 'GBP', 'USD']
    return currencies.map(currency => (
      <div key={currency}>
        1 BTC is {bpi[currency].rate}
        <span> {bpi[currency].code} </span>
      </div>
    ))
  }

  render () {
    return (
      <div>
        <h4>Bitcoin Price Index</h4>
        {this._renderCurrencies()}
      </div>
    )
  }
}

export default BitCoinPrice
