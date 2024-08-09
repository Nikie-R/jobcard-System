const express = require("express");
const router = express.Router();
const Quotation = require("../models").Quotation;
const log = require("../log");

//create quotation
router.post("/create", async (req, res) => {
  try {
    const quotation = await Quotation.create(req.body);
    res.status(201).json(quotation);
  } catch (error) {
    log.error("Error in creating quotation", error);
  }
});

//get quotations
router.get("/getQuotations", async (req, res) => {
  try {
    const quotations = await Quotation.findAll();
    res.status(200).json(quotations);
  } catch (error) {
    log.error("Error in getting quotations", error);
  }
});

//get quotation
router.get("/getQuotation/:id", async (req, res) => {
  try {
    const quotation = await Quotation.findByPk(req.params.id);
    res.status(200).json(quotation);
  } catch (error) {
    log.error("Error in getting quotation", error);
  }
});

//update quotation
router.put("/updateQuotation/:id", async (req, res) => {
  try {
    const quotation = await Quotation.findByPk(req.params.id);
    await quotation.update(req.body);
    res.status(200).json(quotation);
  } catch (error) {
    log.error("Error in updating quotation", error);
  }
});

//delete quotation
router.delete("/deleteQuotation/:id", async (req, res) => {
  try {
    const quotation = await Quotation.findByPk(req.params.id);
    await quotation.destroy();
    res.status(200).json(quotation);
  } catch (error) {
    log.error("Error in deleting quotation", error);
  }
});

module.exports = router;
