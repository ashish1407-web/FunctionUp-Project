const express = require('express');
const router = express.Router();

//const Middleware=require("../middleware/auth")


const interncontrol=require("../controllers/interncontroller")
const collegecontrol=require("../controllers/collegecontroller")
router.post("/create",interncontrol.createIntern)
router.post("/college",collegecontrol.createcollege)
router.get("/data",collegecontrol.finddata)

module.exports = router;

