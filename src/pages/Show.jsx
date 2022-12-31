import React , { PureComponent } from 'react'
import { useParams } from 'react-router-dom'
import showStore from '../stores/showStore'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import Header from '../components/Header';


function Show() {

    const store = showStore()
    const params = useParams()
    

    React.useEffect(() => {
        store.fetchData(params.id);
    }, [])

    if (!store.data) return <></>;
        

  return (
    <div> 
        <Header back />
        <header className='show-header'>
            <img src={store.data.image.large}/>
<h2>{store.data.name} ({store.data.symbol})</h2>
        </header>
        <div className='show-graph'>
            <ResponsiveContainer width='100%' height='100%'>
            <AreaChart
    data={store.graphData}
    margin={{
      top: 10,
      right: 30,
      left: 0,
      bottom: 0,
    }}
  >
    <CartesianGrid strokeDasharray="3 3" />
    <XAxis dataKey="Date" />
    <YAxis />
    <Tooltip />
    <Area type="monotone" dataKey="Price" stroke="#8884d8" fill="#8884d8" />
  </AreaChart>
            </ResponsiveContainer>
        </div>
        
  <div>
    <h4>Market Cap Rank</h4>
    <span>{store.data.market_cap_rank}</span>
  </div>
  <div>
    <h4>24h High</h4>
    <span>{store.data.market_data.high_24h.usd}</span>
  </div>
  <div>
    <h4>24h Low</h4>
    <span>{store.data.market_data.low_24h.usd}</span>
  </div>
  <div>
    <h4>Circulating Supply</h4>
    <span>{store.data.market_data.circulating_supply}</span>
  </div>
  <div>
    <h4>Current Price</h4>
    <span>{store.data.market_data.current_price.usd}</span>
  </div>
  <div>
    <h4>1y Change</h4>
    <span>{store.data.market_data.price_change_percentage_1y.toFixed(2)}%</span>
  </div>
  </div>
  )
}

export default Show