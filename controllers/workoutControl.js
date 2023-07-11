const Workout = require('../models/workout');
const mongoose = require('mongoose');

//get all workout

const getAllWorkout = async (req, res) => {
    try {
        const workouts = await Workout.find({}).sort({ createdAt: -1 })
        res.status(200).json(workouts);

    } catch (error) {
        res.status(404).json({ Error: error });
    }
}




//get single workout

const getaWorkout = async (req, res) => {
    try {
        const { id } = req.params;

        const workout = await Workout.findById(id);
        res.status(200).json(workout);
    } catch (err) {
        res.status(404).json({ Error: err.message });
    }
}

//create a workout
const createWorkout = async (req, res) => {
    const { title, load, reps } = req.body;

    //add to mongodb
    try {
        const workout = await Workout.create({ title, load, reps });
        res.status(200).json(workout);
    } catch (err) {
        res.status(400).json({ mssg: err.message })
    }
}



//delete a workout

const deleteWorkout = async (req, res) => {
    const { id } = req.params;
    try {
        const workout = await Workout.findOneAndDelete({ _id: id });
        res.status(200).json(workout);
    } catch (err) {
        res.status(404).json({ Error: err.message });
    }
}


//update a workout
const updateWorkout = async (req, res) => {
    const { id } = req.params;
    try {
        const workout = await Workout.findOneAndUpdate({ _id: id }, {
            ...req.body
        });
        res.status(200).json(workout);


    } catch (err) {
        res.status(404).json({ Error: err.message });
    }
}



module.exports = {
    createWorkout,
    getAllWorkout,
    getaWorkout,
    deleteWorkout,
    updateWorkout
}