const Sequelize = require('sequelize');

const db = new Sequelize('postgres://postgres:Armavir10@127.0.0.1:5432/bd_users', {
  operatorsAliases: false,
  schema: 'my_schema',
});

class Imgs extends Sequelize.Model {}
Imgs.init(
  {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    email: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    password: {
      type: Sequelize.String,
      allowNull: false,
    },
    username: {
      type: Sequelize.string,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  },
  {
    db,
    modelName: 'table_users',
  }
);

module.exports = Users; /*
module.exports = {
  Users,
  db,
  Op,
};

/*const Sequelize = require('sequelize');
const sequelize = new Sequelize('bd_films', 'alejandro', 'Armavir10', {
  host: 'localhost',
  port: '5432',
  dialect: 'postgres',
  define: {
     charset: 'utf8',
     collate: 'utf8_general_ci',
     timestamps: true
  },
  logging: false,
  schema: 'my_schema'
});

const User = sequelize.define('kik', {// kik - название таблицы
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING(254),
    allowNull: false
  },
  password: Sequelize.STRING,
}, {
  timestamps: false, // ЛУЧШЕ ВКЛЮЧИТЬ, ПОКАЗЫВАЕТ КОГДА БЫЛ СОЗДАН ОБЪЪЕКТ И КОГДА ОБНОВЛЯЛСЯ
});

sequelize.sync({force: false}).then(()=>{ //force: true - перезаписывает полностью данные таблицы с нуля
    User.create({
    username: 'test3',
    password: 'test3',
    email: 'test3'
  })
})
*/
//Определяем модель таблицы пользователей
/*
 Users = db.define('table_users', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type:Sequelize.STRING,
    allowNull: false
  },
  username: {
    type: Sequelize.STRING,
    allowNull: false
  },
}, {
  timestamps: false,
});
*/
/*
//Создаем таблицу с пользователями
db.sync({force: false}).then(()=>{
    Users.create({
    email: 'mail',
    password: '12345',
    username: 'user1'
  })
})
*/
