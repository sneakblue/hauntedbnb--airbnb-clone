const router = require('express').Router();
const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const hauntsRouter = require('./haunts.js');
const imagesRouter = require('./images.js');
const reviewsRouter = require('./reviews.js');
const bookingsRouter = require('./bookings.js');

router.use('/session', sessionRouter);

router.use('/users', usersRouter);

router.use('/haunts', hauntsRouter);

router.use('/images', imagesRouter);

router.use('/reviews', reviewsRouter);

router.use('/bookings', bookingsRouter);

module.exports = router;
