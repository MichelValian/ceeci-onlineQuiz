'use strict';
import mysql2 from 'mysql2';

const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');
const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';
const config = require(__dirname + '/../config/config.json')[env];
if(config.dialect === "mysql"){
  config.dialectModule = mysql2
}

const db = {};

let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

//Importar modelos
import user from './user';
import bank from './bank';
import result from './result';
import room from './room';
import question from './question';
import option from './option';
import answer from './answer';
import cards from './cards';
import gamegroups from './gamegroups';
import usergamegroups from './usergamegroups';
import gamegroupcards from './gamegroupcards';
import notification from './notification';

db.User = user(sequelize, Sequelize.DataTypes);
db.Bank = bank(sequelize, Sequelize.DataTypes);
db.Result = result(sequelize, Sequelize.DataTypes);
db.Room = room(sequelize, Sequelize.DataTypes);
db.Question = question(sequelize, Sequelize.DataTypes);
db.Option = option(sequelize, Sequelize.DataTypes);
db.Answer = answer(sequelize, Sequelize.DataTypes);
db.Cards = cards(sequelize, Sequelize.DataTypes);
db.GameGroups = gamegroups(sequelize, Sequelize.DataTypes);
db.UserGameGroups = usergamegroups(sequelize, Sequelize.DataTypes);
db.GameGroupCards = gamegroupcards(sequelize, Sequelize.DataTypes);
db.Notification = notification(sequelize, Sequelize.DataTypes);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
