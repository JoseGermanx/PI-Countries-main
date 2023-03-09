const getAllActiveCountry = require('../controllers/getDbAct')

const obtenerSeasons = async (req, res, next) => {
  try {
    let seasonsTotal = await getAllActiveCountry();
    const { temp } = req.query;

    if (temp) {
      let temporada = await seasonsTotal.filter((el) =>
        el.temporada.toLowerCase().includes(temp.toLowerCase())
      );
      temporada.length
        ? res.status(200).send(temporada)
        : res.status(400).send("No existe la temporada");
    } else {
      res.status(200).send(seasonsTotal);
    }
  } catch (error) {
    next(error);
  }
};

  module.exports = obtenerSeasons;
  