const dbConnection = require("../../../util/dbConnection");
const { ADD_CUSTOMER } = require("./queries");
const addCustomer = async (req, res) => {
  let {
    id,
    name,
    email,
    passwd,
    contact_number,
    customer_image,
    status,
  } = req.body;

  return new Promise((resolve, reject) => {
    dbConnection
      .getResult(ADD_CUSTOMER, [
        id,
        name,
        email,
        passwd,
        contact_number,
        customer_image,
        status,
      ])
      .then((result) => {
        return resolve(result);
      });
  });
};
module.exports = {
  addCustomer,
};
