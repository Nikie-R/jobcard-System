const express = require("express");
const router = express.Router();
const Customer = require("../models").Customer;
const log = require("../log");

router.post("/create", async (req, res) => {
  try {
    const customer = await Customer.create(req.body);
    res.status(201).json(customer);
  } catch (error) {
    log.error("Error in creating customer", error);
  }
});

router.get("/getCustomers", async (req, res) => {
  try {
    const customers = await Customer.findAll();
    res.status(200).json(customers);
  } catch (error) {
    log.error("Error in getting customers", error);
  }
});

router.get("/getCustomer/:id", async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    res.status(200).json(customer);
  } catch (error) {
    log.error("Error in getting customer", error);
  }
});

router.put("/updateCustomer/:id", async (req, res) => {
  try {
    const customer = await Customer.findByPk(req.params.id);
    await customer.update(req.body);
    res.status(200).json(customer);
  } catch (error) {
    log.error("Error in updating customer", error);
  }
});

module.exports = router;
