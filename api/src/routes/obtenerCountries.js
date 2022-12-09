const getAllCountry = require('../controllers/getDb')

const obtenerCountries = async (req, res, next) => {
  try {
    let countriesTotal = await getAllCountry();
    const { pais } = req.query;

    if (pais) {
      let countryName = await countriesTotal.filter((el) =>
        el.name.toLowerCase().includes(pais.toLowerCase())
      );
      countryName.length
        ? res.status(200).send(countryName)
        : res.status(400).send("No se encuentra el pais");
    } else {
      res.status(200).send(countriesTotal);
    }
  } catch (error) {
    next(error);
  }
};

  module.exports = obtenerCountries;