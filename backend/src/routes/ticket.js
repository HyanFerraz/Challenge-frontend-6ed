const express = require('express');
const routes = express.Router();

const TicketController = require('../controllers/TicketController');

routes.get('/ticket/:cpf', TicketController.findUserByCpf);
routes.post('/ticket', TicketController.createTicket);

module.exports = routes;