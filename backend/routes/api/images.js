const express = require('express');
const asyncHandler = require('express-async-handler');
const { check } = require('express-validator');

const { Image } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler( async (req, res) => {
    const images = await Image.findAll();
    return res.json({ images });
}));

router.post('/create', asyncHandler( async (req, res) => {
    
}))

router.delete('/remove', asyncHandler( async (req, res) => {

}))


module.exports = router;
