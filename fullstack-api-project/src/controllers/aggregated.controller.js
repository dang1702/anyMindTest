const axios = require('axios');
const AggregatedData = require('../models/aggregated.model');

const getAggregatedData = async (req, res) => {
  try {
    const [cryptoRes, weatherRes, newsRes] = await Promise.all([
      axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd'),
      axios.get(`https://api.openweathermap.org/data/2.5/weather?q=Hanoi&appid=${process.env.OPENWEATHER_API_KEY}&units=metric`),
      axios.get(`https://newsapi.org/v2/top-headlines?country=us&pageSize=1&apiKey=${process.env.NEWS_API_KEY}`)
    ]);

    const data = {
      crypto: {
        name: 'Bitcoin',
        symbol: 'BTC',
        price: cryptoRes.data.bitcoin.usd,
        market_cap: 800000000000 // mock value
      },
      weather: {
        city: weatherRes.data.name,
        temperature: weatherRes.data.main.temp,
        condition: weatherRes.data.weather[0].description
      },
      latest_news: {
        title: newsRes.data.articles[0].title,
        source: newsRes.data.articles[0].source.name,
        url: newsRes.data.articles[0].url
      }
    };

    const saved = await AggregatedData.create(data);
    res.json(data);
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ error: 'Error fetching aggregated data' });
  }
};

module.exports = { getAggregatedData };
