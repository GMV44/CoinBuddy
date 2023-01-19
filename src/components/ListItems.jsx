import React from 'react'
import { Link } from 'react-router-dom'

function ListItems({ coin }) {
  return (
    <div className='home-crypto'>
          <Link to={`/${coin.id}`}>
          <span className='home-crypto-image'><img alt='coinImage' src={coin.image}/></span>
        <span className='home-crypto-name'>{coin.name}</span>
        {coin.priceBtc && (<span className='home-crypto-prices'>
            <span className='home-crypto-btc'>
                <img alt='bitC' src='bitcoin.webp'/>
                {coin.priceBtc} BTC</span>
            <span className='home-crypto-usd'>({coin.priceUsd}) USD</span>
        </span>)}
          </Link>
        </div>
  )
}

export default ListItems