const collegemodel = require('../models/CollegeModel');
const valid = function (value) {

    if (typeof value !== "string" || value.trim().length == 0) { return false }
    return true
}

const createcollege = async function (req, res){
    let college=req.dody
    if (!college.name) { return res.status(400).send({ status: false, message: "name is required" }) }

    if (!college.fullname) { return res.status(400).send({ status: false, message: "author first name is required" }) }

    
    if (!valid(college.name)) { return res.status(400).send({ status: false, message: "author first name is not valid" }) }

    if (!valid(college.fullname)) { return res.status(400).send({ status: false, message: "author last name must is not valid " }) }

   
    let collegeCreated = await collegemodel.create(college)
    res.status(201).send({ status:true,data: collegeCreated })
}

   











module.exports.createcollege=createcollege