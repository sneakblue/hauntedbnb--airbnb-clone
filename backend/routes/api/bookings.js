const express = require('express');
const asyncHandler = require('express-async-handler');

const { Booking } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler( async (req, res) => {
    return res.json({ message: 'Booking api route reached'})
}));

router.post('/', asyncHandler( async (req, res) => {
    const { hauntId, userId, startDate, endDate } = req.body;
    const booking = await Booking.create({
        hauntId,
        userId,
        startDate,
        endDate
    });
    return res.json({ booking });
}));

module.exports = router;
