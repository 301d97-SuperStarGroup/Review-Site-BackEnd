'use strict' ;

const Game = require('../models/game.js');

async function postReviews(request, response, next) {
  try {
    let createReview = await Game.create({...request.body, email: request.user.email}); //ignore linter, its dumb

    response.status(201).send(createReview);

  } catch (error) {
    next(error);
  }

}

module.exports = postReviews;
