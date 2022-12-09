const { Country} = require("../db");

const getDbInfo = async () => {
    const select = await Country.findAll();
    return select;
  };
  const getAllCountry = async () => {
    const dbInfo = await getDbInfo();
    return dbInfo;
  };

const obtenerCountries = async (req, res) => {
    let countriesTotal = await getAllCountry();
    try {
      res.status(200).send(countriesTotal);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  }

  module.exports = obtenerCountries;