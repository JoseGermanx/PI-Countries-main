const { Country, Activity } = require("../db");
const getAllCountry = require('../controllers/getDb');

const activity = async (req, res) => {
   const { nombre, dificultad, duracion, temporada, pais } = req.body;
   const countryDB = await Country
      .findAll({ where: { id: pais } })  
   
   const newActivity = await Activity.create({ 
      nombre,
      dificultad,
      duracion,
      temporada
     }).then(act =>{
      res.json(act);
      act.addCountry(countryDB);   
   })
   .catch (err => {
      res.json(err);
   }) ;
    }

    module.exports = activity;