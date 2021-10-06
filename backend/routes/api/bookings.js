const express = require('express');
const asyncHandler = require('express-async-handler');

const { Booking } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler( async (req, res) => {
    return res.json({ message: 'Booking api route reached'})
}))

module.exports = router;
