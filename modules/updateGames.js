'use strict';

const Game = require('../models/game.js');

async function updateGames(request, response, next){
  try {
    let id = request.params.gameID;
    let data = request.body;

    const updatedGame = await Game.findByIdAndUpdate(id, data, {new: true, overwrite: true } ); //ignore the linter, its dumb

    response.status(200).send(updatedGame);

    //ID - the game to update, DATA - the information to update the book with
  } catch (error) {
    next (error);
  }
}

module.exports = updateGames;
