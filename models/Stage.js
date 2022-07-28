const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StageSchema = new Schema({
    destination: {
        // GeoJSON Point
        type: {
          type: String,
          enum: ['Point']
        },
        coordinates: {
          type: [Number],
          index: '2dsphere'
        },
        formattedAddress: String,
        street: String,
        city: String,
        state: String,
        zipcode: String,
        country: String
      },
    bio: {
        type: String
    },
    managedBy: {
        type: String
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    createdFrom: {
        // GeoJSON Point
        type: {
            type: String,
            enum: ['Point']
            },
            coordinates: {
            type: [Number],
            index: '2dsphere'
        },
        formattedAddress: String,
        street: String,
        city: String,
        state: String,
        zipcode: String,
        country: String
    },
    name: {
        type: String,
        required: [ true, 'Stage name must be provided' ],
        unique: true,
    }

    
},{
    toJSON: { virtuals: true },
    // toObject: {virtuals: true }
});


module.exports = mongoose.model('Stage', StageSchema);