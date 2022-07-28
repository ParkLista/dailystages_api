const Taxi = require('../models/Stage');
const ErrorResponse = require('../utils/errorResponse');
const asyncHandler = require('../middleware/async');


/**
 * @Desc Add a new taxi to the database
 */
exports.addStage = asyncHandler(async(req, res, next)=>{
    const taxi = await Taxi.create(req.body);
    res.status(201).json({
        success: true,
        message: 'A taxi has been added successfully',
        data: taxi
    });
});

/**
 * @Desc Get all the available taxis in the database
 */
exports.getStages = asyncHandler(async(req, res, next)=>{
    const taxis = await Taxi.find();
    return res.status(200).json({
        success: true,
        message: 'All Taxis available',
        data: taxis
    })
})