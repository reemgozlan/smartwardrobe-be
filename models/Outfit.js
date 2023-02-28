const mongoose = require("mongoose");
const {Schema} = mongoose;
const Outfit = new Schema ({
name: {
    type: String,
    required: true,
},

category: {
    type: String,
    required: true,
},
itemReference: [{
    type: Schema.Types.ObjectId,
    ref: "Items", 
    default: []

}],

});

module.exports = mongoose.model("Outfits", Outfit);