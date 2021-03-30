const express = require("express");
const { addCustomer } = require("./controllers/customer/addCustomer");
const { getCustomerById } = require("./controllers/customer/getCustomerById");
const { getCustomers } = require("./controllers/customer/getCustomers");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


//GET
app.get("/", async (req, res) => {
  //get all customers
  const result = await getCustomers(req, res);
  res.status(200).send(result);
});

//GET req Simply sends the current time
app.get("/:id",async (req, res) => {
  const result = await getCustomerById(req, res);
  res.status(200).send(result);
});
app.post("/", async (req, res) => {
  //ADD CUSTOMER
  const result = await addCustomer(req, res);
  res.status(200).send(result);

});

module.exports = app;
