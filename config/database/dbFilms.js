//import { Films } from '';
//'use strict';
const Sequelize = require('sequelize');
const db = new Sequelize('postgres://postgres:Armavir10@127.0.0.1:5432/bd_films', {
  operatorsAliases: false,
  schema: 'my_schema',
});

db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

//const Sequelize = require('sequelize');

//import Sequelize from 'sequelize';
//const { db } = require('./connect-service');

//Определяем модель таблицы фильмов
class Films extends Sequelize.Model {}

//async function initFilms() {
// return new Promise((resolve) => {
Films.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    link: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    bigDescription: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  },
  {
    modelName: 'table_films',
    sequelize: db,
  }
);
//resolve();
//});
//}
module.exports = Films;

/*
module.exports = {
  Films,
  db,
  Op,
};*/

/*
//Определяем модель таблицы фильмов
const Films = db.define(
  'table_films',
  {
    //
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    link: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    description: {
      type: Sequelize.String
    }
  },
  {
    timestamps: false,
  }
);
/*
//Создаем таблицу с фильмами
db.sync({ force: false }).then(() => {
  Films.create({
    link: 'https://youtu.be/N6O2ncUKvlg',
  });
});
*/
/*
//Добавляем множество данных в уже созданную таблицу фильмов
Films.bulkCreate([{ link: 'https://youtu.be/EHkozMIXZ8w' }, { link: 'https://youtu.be/it_04dk_97E' }])
  .then(() => {
    //return User.findAll();
  })
  .then((users) => {
    //console.log(users)
  });
*/
