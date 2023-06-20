const { Model, DataTypes } = require('sequelize');

class Ticket extends Model {
    static init(sequelize) {
        super.init({
            name: DataTypes.STRING,
            email: DataTypes.STRING,
            password: DataTypes.STRING,
            cpf: DataTypes.STRING,
            ticket: DataTypes.STRING,
            birthday: DataTypes.DATE
        }, {
            sequelize
        })
    }
}

module.exports = Ticket;