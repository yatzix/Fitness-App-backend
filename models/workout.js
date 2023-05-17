const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    name: {
        type: String
    },
    user: { 
        type: Schema.Types.ObjectId, 
        ref: 'User' 
    },
    exercises: [exerciseSchema],

}, { timestamps: true });

module.exports = mongoose.model('Workout', workoutSchema);