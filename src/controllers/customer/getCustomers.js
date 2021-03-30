const dbConnection  = require("../../../util/dbConnection");
const { GET_ALL_CUSTOMERS } = require("./queries");
const getCustomers = async (req, res) => {

    return new Promise((resolve, reject) => {
        dbConnection.getResult(GET_ALL_CUSTOMERS)
            .then(result => {
                return resolve(result);
            });
    })
}
module.exports = {
    getCustomers
}