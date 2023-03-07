require("dotenv").config();
const cors = require("cors");
const express = require('express');
const itemRouter = require("./routes/items");
const outfitRouter = require("./routes/outfits");
const db = require("./db/db");

const app = express();
const port = process.env.PORT || 5000;
db();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(cors());

app.use("/", itemRouter, outfitRouter);
app.get("/", async(req, res) => {
    res.send('<h1> Here is the first page</h1>');
})


app.listen(port, () => {
    console.log (`App listening on this port ${port}`);
});