const Internmodel = require('../models/InternModel');
let intern=rq.dody
const createIntern = async function (req, res){
let internCreated = await Internmodel.create(intern)
res.status(201).send({ status:true,data: internCreated })}
module.exports.createIntern=createIntern
