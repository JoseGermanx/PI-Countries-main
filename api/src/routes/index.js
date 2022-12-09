const { Router } = require("express");
const axios = require("axios");
const { Country, Activity } = require("../db");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const getApiInfo = async () => {
  const apiUrl = await axios.get("https://restcountries.com/v3/all");
  const apiInfor = await apiUrl.data.map((el) => {
    return {
      id: el.cca3,
      name: el.name.common,
      flag: el.flags[0],
      continente: el.continents[0],
      capital:
        typeof el.capital !== "undefined" ? el.capital[0] : "No tiene capital",
      subregion:
        typeof el.subregion !== "undefined"
          ? el.subregion
          : "No pertenece a una subregion",
      area: el.area,
      poblacion: el.population,
    };
  });
  apiInfor.forEach((el) => {
    Country.findOrCreate({
      where: {
        id: el.id,
        name: el.name,
        flag: el.flag,
        continente: el.continente,
        capital: el.capital,
        subregion: el.subregion,
        area: el.area,
        poblacion: el.poblacion,
      },
    });
  });

  return apiInfor;
};

getApiInfo();

const getDbInfo = async () => {
  const select = await Country.findAll();
  return select;
};
const getAllCountry = async () => {
  const dbInfo = await getDbInfo();
  return dbInfo;
};

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
const router = Router();
router.get('/countries', async (req, res) => {
  let countriesTotal = await getAllCountry();
  try {
    res.status(200).send(countriesTotal);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

router.get('/countries/:id', async (req, res) => {
    let id = req.params.id;
    const country = await Country.findOne({
        where: {
            id: id
        },
      });
    try {
        res.status(200).send(country);
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
})

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

router.post('/activities', async (req, res) => {
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
})

module.exports = router;