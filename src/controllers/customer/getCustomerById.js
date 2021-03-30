const dbConnection = require("../../../util/dbConnection");
const { GET_CUSTOMER_BY_ID } = require("./queries");
const getCustomerById = async (req, res) => {
  let { id } = req.params;
  return new Promise((resolve, reject) => {
    dbConnection.getResult(GET_CUSTOMER_BY_ID, [id]).then((result) => {
      return resolve(result);
    });
  });
};
module.exports = {
  getCustomerById,
};
