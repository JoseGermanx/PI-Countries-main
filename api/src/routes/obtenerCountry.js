const { Country} = require("../db");

const obtenerCountry=  async (req, res) => {
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
}

module.exports = obtenerCountry;