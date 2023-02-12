const express = require("express");

const router =express.Router()
const aperitifs_controller = require("../controller/aperitifs_controller")


//Appel de toutes les routes avec les methodes POST , DELETE , ETC...

//1ere methode GET
router.get("/aperitifs", aperitifs_controller.getData)


//2eme methode GET BY ID
router.get("/aperitifs/:id", aperitifs_controller.getDataById)


//3eme methode GET BY NAME
router.get("/aperitifs/find/:name", aperitifs_controller.getDataByName)

//4eme methode POST
router.post("/aperitifs", aperitifs_controller.post)


//5eme methode UPDATE
router.put("/aperitifs/:id", aperitifs_controller.modif)


//6eme methode DELETE
router.delete("/aperitifs/:id", aperitifs_controller.deleteDataById)




// On exporte le router
module.exports = router;