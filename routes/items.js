const express = require("express");
const router = express.Router();
const {
        getAllItems, 
        addItem, 
        getSingelItem, 
        updateItem, 
        deleteItem} = require("../controllers/items");


router.route("/items").get(getAllItems).post(addItem);


router
    .route("/items/:id")
    .get(getSingelItem)
    .put(updateItem)
    .delete(deleteItem);


module.exports= router;