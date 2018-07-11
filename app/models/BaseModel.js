var _knex = require('knex')
var _bookshelf = require('bookshelf')
var dotenv = require('dotenv')

dotenv.config();

const knex = _knex({
  client: "mysql",
  connection: {
    host: "127.0.0.1",
    database: process.env.DB || 'express_demo',
    user: process.env.DB_USERNAME || 'root',
    password: process.env.DB_PASSWORD || ''
  },
  debug: true
});

const BaseModel = _bookshelf(knex);

// to resolve circular dependencies with relations
BaseModel.plugin('registry');

module.exports = BaseModel