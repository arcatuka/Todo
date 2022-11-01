const mongoose = require("mongoose")
const schema = new mongoose.Schema({ userId: 'ObjectID', projectId: 'ObjectID',isAdmin:'boolean' });
const projectUser = mongoose.model('projectUser', schema);
module.exports ={projectUser}