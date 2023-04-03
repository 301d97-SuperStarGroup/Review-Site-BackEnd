'use strict';
const Game = require('../models/game.js');

async function getUserGames(request, response, next) {
  try {
    let genre = request.params.gameGenre;
    console.log('genre is: ', genre);

    const updatedGameDataByGenre = await Game.find({genre});

    response.status(200).send(updatedGameDataByGenre);

  } catch (error) {
    next(error);
  }
}

// let keywordFromFrontEnd = request.query.game_name;

// let key = `${keywordFromFrontEnd}- Game`;


// using games filtered by user at the front end, call to the mongo database and pull requested data - this is a seaparate endpoint from getAllGames. et all games and send to front end and let user filter; this is from the game API


// 2) when we know what we want to map through, take the api data and do some placeholder seeds with the api data to make sure the api call is functioning before moving on to the other endpoints.


module.exports = getUserGames;
