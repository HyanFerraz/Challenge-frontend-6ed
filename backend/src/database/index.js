const Sequelize = require('sequelize');
const config = require('../config/database');

const connection = new Sequelize(config);

const Ticket = require('../models/Ticket');

Ticket.init(connection);

module.exports = connection;