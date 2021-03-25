const { getResult } = require("../../../util/dbConnection")

const getCustomers = async (req, res) => {

    return new Promise((resolve, reject) => {
        dbConnection.getResult(CUSTOMER_LIST)
            .then(result => {
                return resolve(result);
            });
    })
}
module.exports = {
    getCustomers
}