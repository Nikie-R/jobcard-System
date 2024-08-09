const express = require("express");
const router = express.Router();
const Invoice = require("../models").Invoice;
const log = require("../log");

//create invoice
router.post("/create", async (req, res) => {
  try {
    const invoice = await Invoice.create(req.body);
    res.status(201).json(invoice);
  } catch (error) {
    log.error("Error in creating invoice", error);
  }
});

//get invoices
router.get("/getInvoices", async (req, res) => {
  try {
    const invoices = await Invoice.findAll();
    res.status(200).json(invoices);
  } catch (error) {
    log.error("Error in getting invoices", error);
  }
});

//get invoice
router.get("/getInvoice/:id", async (req, res) => {
  try {
    const invoice = await Invoice.findByPk(req.params.id);
    res.status(200).json(invoice);
  } catch (error) {
    log.error("Error in getting invoice", error);
  }
});

//update invoice
router.put("/updateInvoice/:id", async (req, res) => {
  try {
    const invoice = await Invoice.findByPk(req.params.id);
    await invoice.update(req.body);
    res.status(200).json(invoice);
  } catch (error) {
    log.error("Error in updating invoice", error);
  }
});

//delete invoice
router.delete("/deleteInvoice/:id", async (req, res) => {
  try {
    const invoice = await Invoice.findByPk(req.params.id);
    await invoice.destroy();
    res.status(200).json(invoice);
  } catch (error) {
    log.error("Error in deleting invoice", error);
  }
});

module.exports = router;
