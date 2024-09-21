const express = require("express");
const router = express.Router();
const {JobCard, Sequelize, Customer, Vehicle }= require("../models");
const log = require("../log");

//create jobcard
router.post("/create", async (req, res) => {
  try {
    const jobcard = await JobCard.create(req.body);
    res.status(201).json(jobcard);
  } catch (error) {
    log.error("Error in creating jobcard", error);
  }
});

//get jobcards
router.get("/getJobCards", async (req, res) => {
  try {
    const jobcards = await JobCard.findAll({
      attributes: [
        [
          Sequelize.fn(
            "CONCAT",
            Sequelize.col("customer.name"),
            " ",
            Sequelize.fn("COALESCE", Sequelize.col("customer.surname"), "")
          ),
          "name",
        ],
        "jobCardId",
        "date",
        "kilometers",
        "fuelLevel",
        "battery",
        "triangle",
        "spareTyre",
        "jack",
        "complaint",
        "status"
      ],
      include: [
        {
          model: Customer,
          as: "customer",
          attributes: [], // No customer attributes included, only for the name concatenation
        },
        {
          model: Vehicle,
          as: "vehicle",
          attributes: [
            "regNo",
            "make",
            "model",
          ],
        },
      ],
    });
    res.status(200).json(jobcards);
  } catch (error) {
    log.error("Error in getting jobcards", error);
  }
});

//get jobcard
router.get("/getJobCard/:id", async (req, res) => {
  try {
    const jobcard = await JobCard.findByPk(req.params.id);
    res.status(200).json(jobcard);
  } catch (error) {
    log.error("Error in getting jobcard", error);
  }
});

//update jobcard
router.put("/updateJobCard/:id", async (req, res) => {
  try {
    const jobcard = await JobCard.findByPk(req.params.id);
    await jobcard.update(req.body);
    res.status(200).json(jobcard);
  } catch (error) {
    log.error("Error in updating jobcard", error);
  }
});

//delete jobcard
router.delete("/deleteJobCard/:id", async (req, res) => {
  try {
    const jobcard = await JobCard.findByPk(req.params.id);
    await jobcard.destroy();
    res.status(200).json(jobcard);
  } catch (error) {
    log.error("Error in deleting jobcard", error);
  }
});

module.exports = router;
