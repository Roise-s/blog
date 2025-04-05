const express = require('express');
require('dotenv').config()
const mongoose = require('mongoose')

const app = express();

app.listen(process.env.PORT, () => {
    console.log("Listening on port 4000")
})

app.get('/', (req, res) => {
    res.json({ mssg : 'Working with env'})
})