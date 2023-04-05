'use strict' ;

const Game = require('../models/game.js');

async function deleteOneGame(request, response, next) {
  try {
    let id = request.params.gameID;
    await Game.findByIdAndDelete(id);

    response.status(200).send('Game deleted');
  } catch (error) {
    next(error);
  }

}

module.exports = deleteOneGame;
