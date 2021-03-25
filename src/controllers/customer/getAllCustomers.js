const { getResult } = require("../../../util/dbConnection")

exports.getAllCustomers=async (req,res)=>{

    return new Promise((resolve,reject)=>{
        getResult(GET_ALL_CUSTOMERS).then(result=>{
            return resolve(result);
        })
        .catch(err=>{
            return resolve({error:err.message})
        })

    })
}