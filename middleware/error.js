const ErrorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
    let error = {...err}
    console.log(error)
    error.message = err.message;
    // Mongoose Bad ObjectId
    if(err.name === 'CastError'){
        const message = `Resource not found`;
        error = new ErrorResponse(message, 404);
    }
    // Mongoose Duplicate Key
    if(err.code ===  11000){
        const message = `Duplicate field value entered`;
        error = new ErrorResponse(message, 400);
    }
    // Mongoose validation error
    if(err.name === 'ValidationError'){
        const message = Object.values(err.errors).map(val => val.message);
        error = new ErrorResponse(message, 400);
    }
    res.status(error.StatusCode || 500).json({
        success: false,
        error: error.message || 'Server Error'
    });
}
module.exports = errorHandler;