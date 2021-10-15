This project is created using Node JS and React JS

## Requirements

node version >= 12

npm version >= 6.14

## Installation

```
git clone https://github.com/Jurgitaesu/heroku-gnews-app.git
cd heroku-gnews-app
npm install
cd server
npm install
```

## Adding MongoDB connection string

Create .env file on project's root directory.

Add your MongoDB connection string to .env

```
MONGO_KEY=your_connection_string
```

Add your Google News API key to .env

```
REACT_APP_API_KEY=your_API_KEY
```

## Starting server

On project's root directory type the following command:

```
npm start
```

Open http://localhost:3000/ to see your app.

## Live preview of application:

https://news-search-on-gnews.herokuapp.com/
