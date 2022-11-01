const mongoose = require("mongoose")
const schema = new mongoose.Schema({ id: 'ObjectID', title: 'string' });
const project = mongoose.model('project', schema);
module.exports ={project}