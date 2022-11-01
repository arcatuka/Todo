const mongoose = require("mongoose")
const schema = new mongoose.Schema({ id: 'ObjectID', name: 'string' });
const user = mongoose.model('User', schema);
module.exports ={user}