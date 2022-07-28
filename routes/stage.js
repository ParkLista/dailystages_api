const express = require('express');
const { addStage, getStages } = require('../controllers/stage');

const router = express.Router();

router.post('/', addStage);
router.get('/', getStages);


module.exports = router;