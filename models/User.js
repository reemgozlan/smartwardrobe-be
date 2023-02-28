const mongoose = require("mongoose");
const {Schema} = mongoose; 
const User = new Schema ({
name: {
    type: String,
    required: true,
},

email: {
    type: String,
    require: true,
},
password:{
    type: String,
    require: true,
    maxLength: [20, "Password cannot be longer than 20 characters"],
    minLength: [8, "Password cannot be less than 8 characters"],
},
dateOfBirth:{
    type: Date,
},

});

module.exports = mongoose.model("Users", User);