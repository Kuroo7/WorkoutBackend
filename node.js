const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 4000;

const workoutRoutes = require('./routs/workout');

require('dotenv').config();


const app = express();



app.use(express.json());

app.use(function (req, res, next) {
   res.header("Access-Control-Allow-Origin", "*");
   res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
})

app.use('/api/workout', workoutRoutes);

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("Connected to mongoose");
        app.listen(PORT, () => {
            console.log("Listening to port 4000");
        })
    })
    .catch(err => {
        console.log("Not connected", err);
    })
