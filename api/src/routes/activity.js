const { Country, Activity } = require("../db");
const getAllCountry = require('../controllers/getDb');

const activity = async (req, res) => {
   const { nombre, dificultad, duracion, temporada, pais } = req.body;
      const newActivity = await Activity.create({ 
      nombre,
      dificultad,
      duracion,
      temporada
     });

     const countryDB = await Country.findAll({
      where: { id: pais }
     })

     newActivity.addCountry(countryDB);
     res.status(200).send('Actividad creada con éxito')

    }

    module.exports = activity;