const express = require("express");
const { getAllCustomers } = require("./controllers/customer/getAllCustomers");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//GET
app.get("/", async (req, res) => {
  //get all customers
  const result = await getAllCustomers(req, res);
  res.status(200).send(result);
});

//GET req Simply sends the current time
app.get("/:id", (req, res) => {
  res.status(200).send(`req id ${req.params.id}`);
});
app.post("/", (req, res) => {
  //ADD CUSTOMER
  res.status(200).send("/customer request");
});

module.exports = app;
