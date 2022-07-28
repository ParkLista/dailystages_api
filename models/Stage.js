const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StagesSchema = new Schema({
    plate_number: {
        type: String,
        trim: true,
        required: [ true, 'Plate Number must be added' ],
        unique: true,
    },
    passengers: {
        type: Number,
        required: [ true, 'Number of Passenfers is required' ]
    },
    joinDate: {
        type: Date,
        default: Date.now
    },
    bio: {
        type: String
    },
    driver: {
        type: String,
        required: [ true, 'This Taxi needs a driver to move' ]
    }
},{
    toJSON: { virtuals: true },
    // toObject: {virtuals: true }
});


module.exports = mongoose.model('Stage', StagesSchema);