const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const hauntsRouter = require('./haunts.js');
const imagesRouter = require('./images.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/haunts', hauntsRouter);

router.use('/images', imagesRouter);

module.exports = router;
