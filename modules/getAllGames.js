'use strict';
const axios = require('axios');

let cache = {};

async function getAllGames(request, response, next) {
  try {
    let keywordFromFrontEnd = request.query.game_name;

    let key = `${keywordFromFrontEnd}- Game`;

    if (cache[key] && (Date.now() - cache[key].timestamp) < 6.048e+8) { // milliseconds = 7 days
      console.log('Game cache was hit', cache);

      response.status(200).send(cache[key].data);

    } else {
      console.log('No items in games cache');

      let url = `https://www.freetogame.com/api/games`; // get all games and send to front end and let user filter; this is from the game API

// create something like userGames to then  // this will call to mongo to pull the data, with a separate endpoint. app.get for api call and app.get to get mongo db data. 

// 1) set up endpoint to get everything from the api
// 2) when we know what we want to map through, take the api data and do some placeholder seeds with the api data to make sure the api call is functioning before moving on to the other endpoints.

      let gameResults = await axios.get(url);

      let gamesToSend = gameResults.data.results.map(game => new Game(game));

      cache[key] = {
        data: gamesToSend,
        timestamp: Date.now()
      };

      response.status(200).send(gamesToSend);
    }

  } catch (error) {
    next(error);
  }
}

class Game {
  constructor(gameObj) {
    this.title = gameObj.title;
    this.developer = gameObj.developer;
    this.publisher = gameObj.publisher;
    this.releaseDate = gameObj.releaseDate;
    this.genre = gameObj.genre;
    this.platform = gameObj.platform;
  }
}

module.exports = getAllGames;
