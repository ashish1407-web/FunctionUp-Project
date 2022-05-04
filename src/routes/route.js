const express = require('express');
const router = express.Router();

//const Middleware=require("../middleware/auth")
const interncontrol=require("../controllers/interncontroller")
const collegecontrol=require("../controllers/collegecontroller")
router.post("/createIntern",interncontrol.createIntern)
router.post("/createCollege",collegecontrol.createcollege)
module.exports = router;

