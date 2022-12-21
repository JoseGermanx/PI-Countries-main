const { Country, Activity } = require("../db");
const getAllCountry = require('../controllers/getDb');

const activity = async (req, res) => {
   const { nombre, dificultad, duracion, temporada, pais } = req.body;
   let countriesTotal = await getAllCountry();
   let countryName = await countriesTotal.filter((el) =>
   el.name === pais);
   
    if ( temporada !== "Verano" && temporada !== "Otoño" && temporada !== "Primavera" && temporada !== "Invierno" && !countryName  ) {
        return res.status(401).json({
            msg: `${ temporada } o ${ pais } tienen un error!! 🚑 `
        });
    } else {
     try {
        const newActivity = await Activity.create({ 
          nombre: nombre,
          dificultad: dificultad,
          duracion: duracion,
          temporada:temporada
         });
         const countrieRow = await Country.findByPk(pais);    
        await newActivity.addCountry(countrieRow, { through: "country_activity" });
        res.status(200).send(newActivity);
    } catch (err) {
      res.status(400).json({ error: err.message  });
    }}
    }

    module.exports = activity;