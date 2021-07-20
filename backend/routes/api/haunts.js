const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { Haunt } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler( async (req, res) => {
    const haunts = await Haunt.findAll();
    return res.json({haunts});
}));

router.get('/:id', asyncHandler( async (req, res) => {
    const { id } = req.params;
    const haunt = Haunt.findByPk(id);
    return res.json({ haunt });
}))

router.post('/create', asyncHandler( async (req, res) => {
    const { userId, address, city, state, country, lat, lng, name, price, activity } = req.body;
    const haunt = await Haunt.create({
        userId,
        address,
        city,
        state,
        country,
        lat,
        lng,
        name,
        price,
        activity
    });
    return res.json({ haunt });
}));

router.put( '/:id', asyncHandler( async (req, res) => {
    const { id } = req.params;
    await Haunt.update(
        req.body,
        {
            where: { id },
            returning: true,
            plain: true,
        }
    );
    const updatedHaunt = await Haunt.findByPk(id);
    return res.json({ updatedHaunt });
}));

router.delete('/:id', asyncHandler( async (req, res) => {
    const { id } = req.params;
    await Haunt.destroy({
        where: { id }
    });
    return res.json({ message: 'Haunt deleted' });
}));

module.exports = router;
