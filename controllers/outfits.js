const Outfit = require("../models/Outfit");
const Item = require('../models/Item')


const addOutfit = async(req, res) => {
    //itemReference: Array of Objects of existing Items
    const {name, category, itemReference} = req.body;
    console.log(req.body)
    try{
        const newOutfit = await Outfit.create({name, category, itemReference});
        res.status(201).json(newOutfit);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
};
const getAllOutfits = async(req, res) =>  {
    try{
        const outfits = await Outfit.find().populate('itemReference');
        res.status(200).json(outfits);
    }
    catch(err){
        console.log(err);
        res.status(500).send(err.message);
    }
};

const getSingelOutfit = async(req, res) =>  {
   const { id } = req.params;
   try{
    const outfit = await Outfit.findById(id).populate('itemReference');
    res.status(200).json(outfit);
   }
   catch (err) {
    console.log(err);
    res.status(500).send(err.message);
   }
};

const updateOutfit = async(req, res) => {
    const { id } = req.params;
    const {name, category, itemReference} = req.body;
    try{
        const updatedOutfit = await Outfit.findById(
            id, 
            {name, category, itemReference},
            { new: true}
        );
        res.status(200).json(updatedOutfit);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }

};
const deleteOutfit = async(req, res) => {
   const { id } = req.params;
   try{
    const deleteOutfit = await Outfit.findByIdAndDelete(id);
    res.status(200).send(`The Item ${deleteOutfit.name} has been deleted`);
   }
   catch (err) {
        console.log(err);
        res.status(500).send(err.message);
   }
};

// const createOutfitFromItems = async (req, res) => {
// const {id} = req.params;
// const {_id} = req.body;
//     try{
//         const newOutfit = await Outfit.create({itemReference: _id})

//     }
//     catch(err){
//         console.log(err);
//         res.status(500).send(err.message);
//     }
// }

module.exports = {addOutfit, getAllOutfits, getSingelOutfit, updateOutfit, deleteOutfit};