'use strict';

const Game = require('../models/game.js');

async function updateGames(request, response, next){
  try {
    let id = request.params.gameID;
    let data = request.body;

    const updatedGame = await Game.findByIdAndUpdate(id, data, {new: true, overwrite: true } );

    response.status(200).send(updatedGame);

    //ID - the cat to update, DATA - the information to update the book with
  } catch (error) {
    next (error);
  }
}

module.exports = updateGames;
