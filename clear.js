'use strict';
//*********** (this came from lab 12 -- laurence)

require ('dotenv').config();
const mongoose = require('mongoose');

mongoose.connect(process.env.DB_URL);

const Game = require('./models/game');

async function clear () {
  try {
    await Game.deleteMany({});
    console.log('games cleared from DB'); // <<<< not sure if this is needed

  } catch (err) {
    console.error(err);
  } finally {
    mongoose.disconnect();
  }
}

clear();