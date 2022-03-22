const express = require('express');
const asyncHandler = require('express-async-handler');
const { singlePublicFileUpload, singleMulterUpload } = require('../../awsS3');
const { check } = require('express-validator');

const { Image } = require('../../db/models');

const router = express.Router();

router.get('/', asyncHandler( async (req, res) => {
    const images = await Image.findAll();
    return res.json({ images });
}));

router.post('/create', singleMulterUpload('image'), asyncHandler( async (req, res) => {
    const { hauntId, url } = req.body;
    const imageUrl = await singlePublicFileUpload(req.file);
    const image = await Image.create({
        hauntId,
        imageUrl
    });
    return res.json({ image });
}));

router.delete('/:id', asyncHandler( async (req, res) => {
    const { id } = req.params;
    await Image.destory({
        where: { id }
    });
    return res.json({ message: 'Image deleted' });
}));


module.exports = router;
