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
            validate: {
                is : {
                    args:/^[a-z]+$/i/'',
                    msg:"El nombre de la actividad debe ser texto"
                },
                len : {
                    args: [5, 50],
                    msg: "El nombre debe ser entre 5 y 50 caracteres"
                },
                notNull: {
                    args: true,
                    msg: "El nombre de la actividad no puede estar vacio"
                }
            },

        },
        dificultad: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isNumeric: {
                    args: true,
                },
                len: {
                    args: [1,1],
                    msg: "Dificultad puede ser de 1 a 5 (1 caracter)",
                },
                isIn: {
                    args: [[1, 2, 3, 4, 5]],
                    msg: "La dificultad debe ser  de 1 a 5",
                }
            }

        },
        duracion: {
            type: DataTypes.INTEGER,
            allowNull: false,
            validate: {
                isIn: {
                    args: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ,11, 12, 13, 14,15, 16, 17, 18, 19, 20, 21, 22, 23, 24]],
                    msg: "El tiempo de duración deber ser entre 1 y 24 horas, en formato 24H",
                }
            }

        },
        temporada: {
            type: DataTypes.ENUM(['Verano', 'Otoño', 'Invierno', 'Primavera']),
            allowNull: false,
        },

    })
}