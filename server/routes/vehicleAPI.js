const express = require("express");
const router = express.Router();
const Vehicle = require("../models").Vehicle;
const log = require("../log");

router.post("/create", async (req, res) => {
  try {
    const vehicle = await Vehicle.create(req.body);
    res.status(201).json(vehicle);
  } catch (error) {
    log.error("Error in creating vehicle", error);
  }
});

router.get("/getVehicles", async (req, res) => {
  try {
    const vehicles = await Vehicle.findAll();
    res.status(200).json(vehicles);
  } catch (error) {
    log.error("Error in getting vehicles", error);
  }
});

router.get("/getVehicle/:id", async (req, res) => {
  try {
    const vehicle = await Vehicle.findByPk(req.params.id);
    res.status(200).json(vehicle);
  } catch (error) {
    log.error("Error in getting vehicle", error);
  }
});

router.put("/updateVehicle/:id", async (req, res) => {
  try {
    const vehicle = await Vehicle.findByPk(req.params.id);
    await vehicle.update(req.body);
    res.status(200).json(vehicle);
  } catch (error) {
    log.error("Error in updating vehicle", error);
  }
});

router.delete("/deleteVehicle/:id", async (req, res) => {
  try {
    const vehicle = await Vehicle.findByPk(req.params.id);
    await vehicle.destroy();
    res.status(200).json(vehicle);
  } catch (error) {
    log.error("Error in deleting vehicle", error);
  }
});

module.exports = router;
