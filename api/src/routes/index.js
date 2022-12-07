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
router.get("/countries", async (req, res) => {
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

module.exports = router;
