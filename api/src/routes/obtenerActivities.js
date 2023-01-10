const getAllActiveCountry = require('../controllers/getDbAct')

const obtenerActivities = async (req, res, next) => {
  try {
    let activitiesTotal = await getAllActiveCountry();
    const { act } = req.query;

    if (act) {
      let activityName = await activitiesTotal.filter((el) =>
        el.nombre.toLowerCase().includes(act.toLowerCase())
      );
      activityName.length
        ? res.status(200).send(activityName)
        : res.status(400).send("No existe la actividad");
    } else {
      res.status(200).send(activitiesTotal);
    }
  } catch (error) {
    next(error);
  }
};

  module.exports = obtenerActivities;