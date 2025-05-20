require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const rateLimit = require('express-rate-limit');
const aggregatedRouter = require('./src/routes/aggregated.route');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Rate limiter
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000,
  max: 5,
  message: { error: "Too many requests, please wait before retrying." }
});
app.use('/aggregated-data', limiter);

// MongoDB connect
mongoose.connect('mongodb://localhost:27017/fullstackTest', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log("MongoDB connected"))
  .catch(err => console.error("MongoDB connection error:", err));

// Routes
app.use('/aggregated-data', aggregatedRouter);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
