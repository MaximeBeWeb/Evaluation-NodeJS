const express = require("express");

const router =express.Router()
const cocktails_controller = require("../controller/cocktails_controller")


//Appel de toutes les routes avec les methodes POST , DELETE , ETC...

//1ere methode GET
router.get("/cocktails", cocktails_controller.getData)

//2eme methode GET BY ID
router.get("/cocktails/:id", cocktails_controller.getDataById)

//3eme methode GET BY NAME
router.get("/cocktails/find/:name", cocktails_controller.getDataByName)

//4eme methode POST
router.post("/cocktails", cocktails_controller.post)

//5eme methode UPDATE
router.put("/cocktails/:id", cocktails_controller.modif)

// 6eme methode DELETE
router.delete("/cocktails/:id", cocktails_controller.deleteDataById)



// On exporte le router
module.exports = router;