const Ticket = require('../models/Ticket');

module.exports = {
    async findUserByCpf(req, res) {
        const tickets = await Ticket.findOne({
            where: {
                cpf: req.params.cpf
            }
        });
        return res.json(tickets);
    },

    async createTicket(req, res) {
        const { name, email, password, cpf, ticket, birthday } = req.body;
        await Ticket.create({ name, email, password, cpf, ticket, birthday });
        res.cookie('cpf', cpf);
        res.redirect(`http://localhost:3000/meu-ingresso`);
    }

}