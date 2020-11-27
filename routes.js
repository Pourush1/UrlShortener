const router = require('express').Router()
const ShortUrlController = require('./controller/createShortUrl')
const RedirectController = require('./controller/redirect')

router.get('/:shortUrlCode', RedirectController.redirect)
router.post('/api/url/shorten', ShortUrlController.storeShortenUrl)

module.exports = router