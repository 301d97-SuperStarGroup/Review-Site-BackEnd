'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const gameSchema = new Schema ({
  title: { type: String, required: true },
  developer: { type: String, required: true },
  publisher: { type: String, required: true },
  releaseDate: { type: String, required: true },
  genre: { type: String, required: true },
  platform: { type: String, required: true },
  playStatus: { type: Boolean, required: true },
  reviewNotes: { type: String, required: true },
  email: String
});

const Game = mongoose.model('game', gameSchema);

module.exports = Game;
