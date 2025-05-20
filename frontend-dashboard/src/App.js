import React, { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const [priceFilter, setPriceFilter] = useState(0);
  const [city, setCity] = useState("Hanoi");
  const [keyword, setKeyword] = useState("");

  const fetchData = async () => {
    try {
      const res = await axios.get("http://localhost:5000/aggregated-data");
      setData(res.data);
    } catch (err) {
      console.error("Error fetching data", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilter = () => {
    fetchData();
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <div className="filter">
        <label>
          Crypto price above:
          <input
            type="number"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
          />
        </label>
        <button onClick={handleFilter}>Apply</button>
      </div>

      {data && data.crypto.price > priceFilter && (
        <div className="card">
          <h2>Crypto</h2>
          <p>Name: {data.crypto.name}</p>
          <p>Symbol: {data.crypto.symbol}</p>
          <p>Price: ${data.crypto.price}</p>
          <p>Market Cap: ${data.crypto.market_cap}</p>
        </div>
      )}

      {data && (
        <div className="card">
          <h2>Weather in {data.weather.city}</h2>
          <p>Temperature: {data.weather.temperature}°C</p>
          <p>Condition: {data.weather.condition}</p>
        </div>
      )}

      {data && (
        <div className="card">
          <h2>Latest News</h2>
          <p><strong>{data.latest_news.title}</strong></p>
          <p>Source: {data.latest_news.source}</p>
          <a href={data.latest_news.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      )}
    </div>
  );
}

export default App;
