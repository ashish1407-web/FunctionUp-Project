 const Internmodel = require('../models/InternModel');
const valid = function (value) {

if (typeof value !== "string" || value.trim().length == 0) { return false }
return true
}

const createIntern = async function (req, res){
    let intern=req.body
    if (!intern.name) { return res.status(400).send({ status: false, message: "name  is required" }) }
    if (!intern.email) { return res.status(400).send({ status: false, message: "email is required" }) }
    const emailId=await Internmodel.find({email:intern.email});
    if(emailId.length!=0) return res.status(401).send({status:false,msg:"Email is Already Exist"});

    if (!intern.mobile) { return res.status(400).send({ status: false, message: "mobile no. is required" }) }
    const mobilenumber=await Internmodel.find({mobile:intern.mobile});
    if(mobilenumber!=0) return res.status(401).send({status:false,msg:"Phone is Already Exist"});

    if (!intern.collegeId) { return res.status(400).send({ status: false, message: " collegeId is required" }) }
    if (!valid(intern.name)) { return res.status(400).send({ status: false, message: "name is invalid" }) }
    let pattern = /^[A-Za-z0-9._]{3,}@[A-Za-z]{3,}[.]{1}[A-Za-z.]{2,6}$/

    if (!pattern.test(intern.email)) { return res.status(400).send({ status: false, message: "email is not valid" }) }
    
    let Id = intern.collegeId

    let patter = /^[0-9A-Fa-f]{24}$/

    if (!patter.test(Id)) { return res.status(400).send({ status: false, message: "collegeId is not valid" }) }
    let check=/^(\+\d{1,3}[- ]?)?\d{10}$/

        if(!check.test(intern.mobile)){ return res.status(400).send({ status: false, message: "mobile number is not valid" }) }

    

   
let internCreated = await Internmodel.create(intern)
res.status(201).send({ status:true,data: internCreated })
}

module.exports.createIntern=createIntern;









