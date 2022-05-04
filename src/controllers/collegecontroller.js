const collegemodel = require('../models/CollegeModel');
let college=req.dody
const createcollege = async function (req, res){
let collegeCreated = await collegemodel.create(college)
res.status(201).send({ status:true,data: collegeCreated })}
module.exports.createcollege=createcollege