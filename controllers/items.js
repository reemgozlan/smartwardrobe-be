
const Item = require("../models/Item");


const addItem = async(req, res) => {
    const {name, brand, category, color, whichPart, matchesWith} = req.body;
    try{
        const newItem = await Item.create({name, brand, category, color, whichPart, matchesWith});
        res.status(201).json(newItem);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }
};
const getAllItems = async(req, res) =>  {
    try{
        const items = await Item.find();
        res.status(200).json(items);
    }
    catch(err){
        console.log(err);
        res.status(500).send(err.message);
    }
};

const getSingelItem = async(req, res) =>  {
   const { id } = req.params;
   try{
    const item = await Item.findById(id);
    res.status(200).json(item);
   }
   catch (err) {
    console.log(err);
    res.status(500).send(err.message);
   }
};

const updateItem = async(req, res) => {
    console.log('test', req.body)
    const { id } = req.params;
    const {name, brand, category, color, whichPart, matchesWith} = req.body;
    try{
        const updatedItem = await Item.findById(
            id, 
            {name, brand, category, color, whichPart, matchesWith},
            { new: true}
        );
        res.status(200).json(updatedItem);
    }
    catch (err) {
        console.log(err);
        res.status(500).send(err.message);
    }

};
const deleteItem = async(req, res) => {
   const { id } = req.params;
   try{
    const deleteItem = await Item.findByIdAndDelete(id);
    res.status(200).send(`The Item ${deleteItem.name} has been deleted`);
   }
   catch (err) {
        console.log(err);
        res.status(500).send(err.message);
   }
};

module.exports = {addItem, getAllItems, getSingelItem, updateItem, deleteItem};