const mongoose = require("mongoose");

const db = async (req, res) => {
    try{
        const URI = process.env.MONGO_URI;
        mongoose.set("strictQuery", true);
        mongoose.connect(URI);
        console.log("connected to the database");
    }
    catch (err) {
        console.log(err);
        req.status(500).send("Could not connect to the database");
    }
};

module.exports = db;