const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {

    sequelize.define('activity', {
        id : {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false,
            primaryKey: true,        
        },
        nombre : {
            type: DataTypes.STRING,
            allowNull: false,

        },
        dificultad: {
            type: DataTypes.STRING,
            allowNull: false,

        },
        duracion: {
            type: DataTypes.TIME,
            allowNull: false,

        },
        temporada: {
            type: DataTypes.STRING,
            allowNull: false,

        },

    })
}