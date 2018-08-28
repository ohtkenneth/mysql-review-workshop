const mysql = require('mysql');
const Sequelize = require('sequelize');

const connection = new Sequelize('todo_list', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
});

connection
  .authenticate()
  .then(() => console.log('Successfully connected to the database!'))
  .catch(err =>
    console.log('Error establishing connection to the database!', err)
  );

module.exports = connection;
