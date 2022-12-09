const { Country, Activity } = require("../db");

const activity = async (req, res) => {
  
    const { nombre, dificultad, duración, temporada, pais } = req.body;
   
    if ( temporada !== "Verano" && temporada !== "Otoño" && temporada !== "Primavera" && temporada !== "Invierno" ) {
        return res.status(401).json({
            msg: `${ temporada } no es una temporada`
        });
    } else {
     try {
        const newActivity = await Activity.create({ 
          nombre: nombre,
          dificultad: dificultad,
          duracion: duración,
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