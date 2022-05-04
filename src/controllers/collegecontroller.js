const collegemodel = require('../models/CollegeModel');

const createcollege = async function (req, res){
let college=req.body;    
let collegeCreated = await collegemodel.create(college)
res.status(201).send({ status:true,data: collegeCreated })
}
module.exports.createcollege=createcollege;






