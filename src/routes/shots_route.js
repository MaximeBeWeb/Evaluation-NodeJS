const express = require("express");

const router = express.Router();
const shots_controller = require("../controller/shots_controller");

//1ere Methode GET
router.get("/shots", shots_controller.getData);

//2eme methode GET BY ID
router.get("/shots/:id", shots_controller.getDataById);

//3eme methode GET BY NAME
router.get("/shots/find/:name", shots_controller.getDataByName);

//4eme methode POST
router.post("/shots", shots_controller.post);

//5eme methode UPDATE
router.put("/shots/:id", shots_controller.updateData)

//6eme methode DELETE
router.delete("/shots/:id", shots_controller.deleteDataById);

// On exporte le router
module.exports = router;
