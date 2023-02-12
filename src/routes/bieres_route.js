const express = require("express");

const router =express.Router()
const bieres_controller = require("../controller/bieres_controller")


//Appel de toutes les routes avec les methodes POST , DELETE , ETC...

//1ere methode GET
router.get("/bieres", bieres_controller.getData)

//2eme methode GET BY ID
router.get("/bieres/:id", bieres_controller.getDataById)

//3eme methode GET BY NAME
router.get("/bieres/find/:name", bieres_controller.getDataByName)

//4eme methode POST
router.post("/bieres", bieres_controller.post)

//5eme methode UPDATE
router.put("/bieres/:id", bieres_controller.modif)

// 6eme methode DELETE
router.delete("/bieres/:id", bieres_controller.deleteDataById)



// On exporte le router
module.exports = router;
