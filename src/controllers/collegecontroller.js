const collegemodel = require('../models/CollegeModel');
const Internmodel = require('../models/InternModel')
const valid = function (value) {

    if (typeof value !== "string" || value.trim().length == 0) { return false }
    return true
}

const createcollege = async function (req, res){
    let college=req.body
    if (!college.name) { return res.status(400).send({ status: false, message: "name is required" }) }

    if (!college.fullname) { return res.status(400).send({ status: false, message: "fullname is required" }) }
    
    if (!college.logoLink) { return res.status(400).send({ status: false, message: "logolink is required" }) }

    
    if (!valid(college.name)) { return res.status(400).send({ status: false, message: " name is not valid" }) }

    if (!valid(college.fullname)) { return res.status(400).send({ status: false, message: " fullname  is not valid " }) }

   
    let collegeCreated = await collegemodel.create(college)
    res.status(201).send({ status:true,data: collegeCreated })
}
const finddata=async function(req,res){
let Name = req.query.name
        if (!Name) { return res.status(400).send({ status: false, message: "Name is required" }) }


        let collegeDetail = await collegemodel.findOne({ name: Name, isDeleted: false })

        if (!collegeDetail) { res.status(404).send({ status: false, msg: "collegeDetail not found" }) }

        let id = collegeDetail._id.toString()
        let check2 = await Internmodel.find({ collegeId: id })

        let obj = {
            "name": collegeDetail.name,
            "fullName": collegeDetail.fullname,
            "logoLink": collegeDetail.logoLink,
            "interests": check2
            
        }
        res.status(200).send({ status: true, data: obj })

    }
module.exports.createcollege=createcollege
module.exports.finddata=finddata
