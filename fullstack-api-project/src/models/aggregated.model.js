const mongoose = require('mongoose');

const AggregatedSchema = new mongoose.Schema({
  crypto: {
    name: String,
    symbol: String,
    price: Number,
    market_cap: Number
  },
  weather: {
    city: String,
    temperature: Number,
    condition: String
  },
  latest_news: {
    title: String,
    source: String,
    url: String
  }
}, { timestamps: true });

module.exports = mongoose.model('AggregatedData', AggregatedSchema);
