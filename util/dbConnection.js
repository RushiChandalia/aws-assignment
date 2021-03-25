const { Pool } = require("pg");
var { StatusCodes } = require("http-status-codes");


async function getResult(sqlQuery, params = []) {
  var res = await getResultArray(sqlQuery, params); // a is 5
  return res;
}

async function getResultArray(sqlQuery, params = []) {
  return new Promise(function (resolve, reject) {
    let status = StatusCodes.OK;
    let data = [];
    let errorMessage = "";

    pool = new Pool({
      user: "postgres",
      host: "database-2.cppouofmvkz9.ap-south-1.rds.amazonaws.com",
      database: "postgres",
      password: "M5PCdXhAWkq6VnMf0AjH",
      port: 5432,
    });

    return pool.query(sqlQuery, [...params], (err, result) => {
      if (err) {
        errorMessage = err.message;

        return resolve({
          status: StatusCodes.OK,
          data: [],
          errorMessage,
        });
      }

      switch (result.command) {
        case "INSERT":
          if (result.rowCount > 0) {
            data = [...result.rows];
            status = StatusCodes.CREATED;
          }

          break;
        case "UPDATE":
          if (result.rowCount > 0) {
            data = [];
            status = StatusCodes.ACCEPTED;
          }

          break;
        case "DELETE":
          if (result.rowCount > 0) {
            data = [];
            status = StatusCodes.NO_CONTENT;
          }

          break;

        default:
          if (result.rows.length > 0) {
            data = result.rows;
            status = StatusCodes.OK;
          } else {
            data = [];
            status = StatusCodes.OK;
          }
          break;
      }

      return resolve({
        status,
        data,
        errorMessage,
      });
    });
  });
}

module.exports = {
  getResult,
};