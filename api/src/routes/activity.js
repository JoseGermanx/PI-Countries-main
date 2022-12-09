const { Country, Activity } = require("../db");

const activity = async (req, res) => {
    const { nombre, dificultad, duración, temporada } = req.body;
    const {pais} = req.query;
    const newActivity = await Activity.create({ 
      nombre: nombre,
      dificultad: dificultad,
      duracion: duración,
      temporada:temporada
     });
     const countrieRow = await Country.findByPk(pais);
    
      console.log(newActivity);
    
      try {
        await newActivity.addCountry(countrieRow, { through: "country_activity" });
        res.status(200).send(newActivity);
    } catch (err) {
      res.status(400).json({ error: err.message  });
    }
    }

    module.exports = activity;