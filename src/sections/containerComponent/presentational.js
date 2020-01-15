import React from 'react'

const BitCoinPrice = ({ bpi }) => {
  const _renderCurrencies = () => {
    const currencies = Object.keys(bpi) // ['EUR', 'GBP', 'USD']
    return currencies.map(currency => (
      <div key={currency}>
        1 BTC is {bpi[currency].rate}
        <span> {bpi[currency].code} </span>
      </div>
    ))
  }

  return (
    <div>
      <h4>Bitcoin Price Index</h4>
      {_renderCurrencies(bpi)}
    </div>
  )
}

export default BitCoinPrice
