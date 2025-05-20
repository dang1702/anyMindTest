# Full-Stack Developer Test - Multi-API Integration

## Overview

This project is a technical test for a Full-Stack Developer role, consisting of a Node.js + Express backend and a React frontend.  
The goal is to integrate data from multiple public APIs, normalize and store it in MongoDB, and display it on a dashboard.

---

## Technologies Used

- **Backend:** Node.js, Express, MongoDB (Mongoose), Axios, dotenv  
- **Frontend:** React.js, Axios, React Hooks  
- **Others:** Rate limiting using in-memory cache, CORS, concurrent API requests

---

## Project Structure

/fullstack-api-project
├─ server.js
├─ routes/
├─ models/
├─ controllers/
├─ package.json
├─ .env.example

/frontend-dasboard
├─ src/
├─ public/
├─ package.json
├─ .env.example


---

## Installation and Running Instructions

### Backend

1. Install dependencies:

### Backend
npm install
Create a .env file based on .env.example and fill in your configuration:

MONGO_URI=your_mongodb_connection_string
COINGECKO_API_URL=https://api.coingecko.com/api/v3
OPENWEATHER_API_KEY=your_openweather_api_key
NEWSAPI_API_KEY=your_newsapi_key

## Start the server:

node server.js
The server runs on port 5000 by default

### Frontend
Install dependencies:

npm install
Create a .env file if needed to configure API base URL:

REACT_APP_API_URL=http://localhost:5000

### Start the frontend app:

npm start
The app will run on http://localhost:3000.

-------

Features
Backend:

    Fetches data from CoinGecko, OpenWeather, NewsAPI

    Normalizes and stores data in MongoDB

    Provides /aggregated-data API endpoint with combined data

    Implements rate limiting: 5 requests per minute per client

Frontend:

    Dashboard displaying Crypto, Weather, and News sections

    Filter Crypto by price range

    Select city for Weather updates

    Search news articles by keywords

    Card-based UI for better readability

Notes
Backend will still run without MongoDB but data persistence will not work

API keys for OpenWeather and NewsAPI are required for full functionality

Rate limiting uses in-memory cache for simplicity (no Redis included)

Contact
If you have any questions or need support, please contact: chauhuudang1702@gmail.com