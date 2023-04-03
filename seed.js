'use strict';

const mongoose = require('mongoose');

require('dotenv').config();
mongoose.connect(process.env.DB_URL);

const Game = require('./models/game.js');

async function seed() {

  await Game.create({
    title: 'COD WARZONE 2',
    developer: 'Raven Software',
    publisher: 'Activision',
    releaseDate: 'November 14, 2022',
    genre: 'FPS',
    platform: 'PlayStation 5, PlayStation 4, Xbox One, Xbox Series X and Series S, Microsoft Windows',
    playStatus: true,
    reviewNotes: '6/10',


  });

  console.log('COD WARZONE 2 was added!');

  await Game.create({
    title: 'Rocket League',
    developer: 'Psyonix',
    publisher: 'Psyonix',
    releaseDate: 'July 7, 2015',
    genre: 'Action',
    platform: 'PlayStation 5, PlayStation 4, Xbox One, Xbox Series X and Series S, Microsoft Windows',
    playStatus: true,
    reviewNotes: '6/10',


  });

  mongoose.disconnect();
}
seed();
