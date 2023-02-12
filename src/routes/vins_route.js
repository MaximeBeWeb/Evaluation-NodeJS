const express = require("express");

const router =express.Router();
const vins_controller = require("../controller/vins_controller");


//Appel de toutes les routes avec les methodes POST , DELETE , ETC...

//1ere methode GET
router.get("/vins", vins_controller.getData);

//2eme methode GET BY ID
router.get("/vins/:id", vins_controller.getDataById);

//3eme methode GET BY NAME
router.get("/vins/find/:name", vins_controller.getDataByName);

//4eme methode POST
router.post("/vins", vins_controller.post);

//5eme methode UPDATE
router.put("/vins/:id", vins_controller.modif);

// 6eme methode DELETE
router.delete("/vins/:id", vins_controller.deleteDataById);



// On exporte le router
module.exports = router;
