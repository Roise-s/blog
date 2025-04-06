const express = require('express');
require('dotenv').config()
const mongoose = require('mongoose')

const app = express();

mongoose.connect(process.env.MONGO_URL)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log("Listening on port 4000")
        })
    })
    .catch((error) => {
        console.log(error)
        console.log('Not connected')
    })
    
const loginSignup = async(req, res) => {
    res.json({massg : 'Login working'})
}

app.get('/', loginSignup)