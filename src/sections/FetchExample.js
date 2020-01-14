import React, { Component } from 'react'

class FetchExample extends Component {
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

  _renderCurrencies () {
    const { bpi } = this.state
    const currencies = Object.keys(bpi) // ['EUR', 'GBP', 'USD']
    return currencies.map(currency => (
      <div key={currency}>
        1 BTC is {bpi[currency].rate}
        <span>{currency}</span>
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

export default FetchExample
