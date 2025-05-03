const express = require('express');
const router = express.Router();
const ShortUrlController = require('./controller/createShortUrl');

const apiRouter = express.Router();
router.use('/api', apiRouter);

apiRouter.post('/url/shorten', ShortUrlController.storeShortenUrl);

module.exports = router;
