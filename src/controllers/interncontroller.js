const Internmodel = require('../models/InternModel');

const createIntern = async function (req, res){
let intern=req.body;    
let internCreated = await Internmodel.create(intern);
res.status(201).send({ status:true,data: internCreated })
}
module.exports.createIntern=createIntern
