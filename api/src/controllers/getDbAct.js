const { Activity } = require("../db");

const getDbInfo = async () => {
  const select = await Activity.findAll();
  return select;
};
const getAllActiveCountry = async () => {
  const select = await getDbInfo();
  return select;
};

module.exports = getAllActiveCountry;
