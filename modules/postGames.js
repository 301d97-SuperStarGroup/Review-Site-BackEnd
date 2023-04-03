'use strict' ;

const Game = require('../models/game.js');

async function postGames(request, response, next) {
  try {
    let createGame = await Game.create(request.body);

    response.status(201).send(createGame);

  } catch (error) {
    next(error);
  }

}

module.exports = postGames;
