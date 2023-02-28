const mongoose = require("mongoose");
const {Schema} = mongoose;
const Item = new Schema ({
name: {
    type: String,
    required: true,
},

brand: {
    type: String,
},
category: {
    type: Array,
    required: true,
},
color:{
    type: String,
},
whichPart: {
    type: String,
    require: true,
},
matchesWith: {
    type: Array,
    require: true,
},

});

module.exports = mongoose.model("Items", Item);