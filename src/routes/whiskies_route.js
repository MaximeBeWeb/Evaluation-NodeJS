const express = require("express");

const router =express.Router()
const whiskies_controller = require("../controller/whiskies_controller")


//Appel de toutes les routes avec les methodes POST , DELETE , ETC...

//1ere methode GET
router.get("/whiskies", whiskies_controller.getData)

// //2eme methode GET BY ID
router.get("/whiskies/:id", whiskies_controller.getDataById)

// //3eme methode GET BY NAME
router.get("/whiskies/find/:name", whiskies_controller.getDataByName)

//4eme methode POST
router.post("/whiskies", whiskies_controller.post)

//5eme methode UPDATE
router.put("/whiskies/:id", whiskies_controller.modif)

// // 6eme methode DELETE
router.delete("/whiskies/:id", whiskies_controller.deleteDataById)



// On exporte le router
module.exports = router;