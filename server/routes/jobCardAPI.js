const express = require("express");
const router = express.Router();
const jobcard = require("../models").JobCard;
const log = require("../log");

//create jobcard
router.post("/create", async (req, res) => {
  try {
    const jobcard = await jobcard.create(req.body);
    res.status(201).json(jobcard);
  } catch (error) {
    log.error("Error in creating jobcard", error);
  }
});

//get jobcards
router.get("/getJobCards", async (req, res) => {
  try {
    const jobcards = await jobcard.findAll();
    res.status(200).json(jobcards);
  } catch (error) {
    log.error("Error in getting jobcards", error);
  }
});

//get jobcard
router.get("/getJobCard/:id", async (req, res) => {
  try {
    const jobcard = await jobcard.findByPk(req.params.id);
    res.status(200).json(jobcard);
  } catch (error) {
    log.error("Error in getting jobcard", error);
  }
});

//update jobcard
router.put("/updateJobCard/:id", async (req, res) => {
  try {
    const jobcard = await jobcard.findByPk(req.params.id);
    await jobcard.update(req.body);
    res.status(200).json(jobcard);
  } catch (error) {
    log.error("Error in updating jobcard", error);
  }
});

//delete jobcard
router.delete("/deleteJobCard/:id", async (req, res) => {
  try {
    const jobcard = await jobcard.findByPk(req.params.id);
    await jobcard.destroy();
    res.status(200).json(jobcard);
  } catch (error) {
    log.error("Error in deleting jobcard", error);
  }
});

module.exports = router;
