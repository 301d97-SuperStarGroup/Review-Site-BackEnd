'use strict';

const mongoose = require('mongoose');

const { Schema } = mongoose;

const gameSchema = new Schema ({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  thumbnail: { type: String, required: true }, //"thumbnail": "https://www.freetogame.com/g/540/thumbnail.jpg",
  short_description: {type: String, required: true },
  genre: { type: String, required: true },
  platform: { type: String, required: true },
  freetogame_profile_url: {type: String, required: true},
  playStatus: { type: Boolean, required: true },
  reviewNotes: {type: String, required: true },
  email: {type: String, required: true},
});

const Game = mongoose.model('game', gameSchema);

module.exports = Game;
