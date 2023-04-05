'use strict' ;

const Game = require('../models/game.js');

async function deleteGame(request, response, next) {
  try {
    let id = request.params.gameID;
    await Game.findByIdAndDelete(id);

    response.status(204).send('Game deleted');

  } catch (error) {
    next(error);
  }

}

module.exports = deleteGame;