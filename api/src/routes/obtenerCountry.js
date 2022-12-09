const { Country, Activity} = require("../db");

const obtenerCountry=  async (req, res) => {
    let id = req.params.id;
    const country = await Country.findOne({
        where: {
            id: id
        },
        include: Activity
      });
      console.log(country)
    try {
        res.status(200).send(country
        //   {
        //   Pais: country.name,
        //   Bandera: country.flags,
        //   Continente: country.continente,
        //   Capital: country.capital,
        //   Suregion: country.subregion,
        //   Área: country.area,
        //   Población: country.population
        // }
        );
      } catch (err) {
        res.status(400).json({ error: err.message });
      }
}

module.exports = obtenerCountry;