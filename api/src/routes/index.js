const { Router } = require("express");
const axios = require("axios");
const { Country, Activity } = require("../db");
const getApiInfo = require("../controllers/getApiInfo")
const obtenerCountries = require("./obtenerCountries")
const obtenerCountry = require("./obtenerCountry")
const activity = require("./activity")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

getApiInfo();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const router = Router();
router.get('/countries', obtenerCountries);
router.get('/countries/:id', obtenerCountry);
router.get("/countryconsult", async (req, res) => {
  const { pais } = req.query;
  const countrys = await Country.findOne({
    where: {
      name: pais,
    },
    include: Activity
  });
  try {
      if (countrys.dataValues.name === pais) {
      res.status(200).send({
        País: countrys.dataValues.name,
        Continente: countrys.dataValues.continente,
        Actividades: countrys.activities

       });
    }
  } catch (error) {
    res.status(400).json({ error: `Hubo un error, este fue el país que ingresaste: "${pais}", y tiene un error en el texto`  });
  }
});
router.post('/activities', activity)

module.exports = router;