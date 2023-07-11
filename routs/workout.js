const express = require('express');

// const Workout = require('../models/workout')

const { createWorkout, getAllWorkout, getaWorkout, deleteWorkout, updateWorkout } = require('../controllers/workoutControl')

const router = express.Router();

router.get('/', getAllWorkout)



router.get('/:id', getaWorkout)

// router.post('/', async (req, res) => {
//     const { title, load, reps } = req.body;
//     try {
//         const workout = await Workout.create({ title, load, reps });
//         res.status(200).json(workout);
//     } catch (err) {
//             res.status(400).json({ mssg: err.message })
//         res.json({ mssg: 'add a single Workout' })
//         }
// })

router.post('/', createWorkout);

router.delete('/:id', deleteWorkout);

router.patch('/:id', updateWorkout);

module.exports = router; 