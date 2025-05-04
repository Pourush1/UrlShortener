const express = require('express');
const router = express.Router();
const ShortUrlController = require('./controller/createShortUrl');
const RedirectController = require('./controller/redirectToLongUrl');

const apiRouter = express.Router();
router.use('/api', apiRouter);

apiRouter.post('/url/shorten', ShortUrlController.storeShortenUrl);
apiRouter.get('/:shortUrlCode', RedirectController.redirectToLongUrl);

module.exports = router;
