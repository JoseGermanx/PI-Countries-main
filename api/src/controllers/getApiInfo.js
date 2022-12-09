
const axios = require("axios");
const { Country} = require("../db");

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
  
  module.exports = getApiInfo;
