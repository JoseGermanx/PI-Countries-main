const { Country } = require("../db");

const getDbInfo = async () => {
  const select = await Country.findAll();
  return select;
};
const getAllCountry = async () => {
  const dbInfo = await getDbInfo();
  return dbInfo;
};

module.exports = getAllCountry;
