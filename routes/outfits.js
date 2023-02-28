const express = require("express");
const router = express.Router();
const {
        getAllOutfits, 
        addOutfit, 
        getSingelOutfit, 
        updateOutfit, 
        deleteOutfit} = require("../controllers/outfits");


router.route("/outfits").get(getAllOutfits).post(addOutfit);


router
    .route("/outfits/:id")
    .get(getSingelOutfit)
    .put(updateOutfit)
    .delete(deleteOutfit);

// router.route('/outfits/:id/createoutfit').put(createOutfitFromItems)

module.exports= router;