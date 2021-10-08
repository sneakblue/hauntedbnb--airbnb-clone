const express = require('express');
const asyncHandler = require('express-async-handler');

const { Booking } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler( async (req, res) => {
    const bookings = await Booking.findAll();
    return res.json({ bookings });
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

router.put('/:id', asyncHandler( async (req, res) => {
    const { id } = req.params;
    await Booking.update(
        req.body,
        {
            where: { id },
            returning: true,
            plain: true,
        }
    );
    const updatedBooking = await Booking.findByPk(id);
    return res.json({ updatedBooking });
}));

router.delete('/:id', asyncHandler( async (req, res) => {
    const { id } = req.params;
    await Booking.destroy({
        where: { id }
    });
    return res.json({ message: 'Haunt deleted' });
}));

module.exports = router;
