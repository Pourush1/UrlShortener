const validUrl = require('valid-url');
const config = require('config');
const { nanoid } = require('nanoid');

const Url = require('../models/Url');

const storeShortenUrl = async (req, res) => {
  const { longUrl } = req.body;
  console.log(`longUrl: ${longUrl}`);
  const baseUrl = config.get('baseUrl');
  console.log(`baseUrl: ${baseUrl}`);

  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json('Invalid base url');
  }

  if (validUrl.isUri(longUrl)) {
    try {
      let longurlInDatabase = await Url.findOne({ longUrl });

      if (longurlInDatabase) {
        res.json(longurlInDatabase);
      } else {
        let shortUrlCode = await nanoid(6);
        shortUrlCode = shortUrlCode.toLowerCase();
        const shortUrl = baseUrl + '/' + shortUrlCode;
        const urlModelData = {
          shortUrlCode,
          longUrl,
          shortUrl,
          date: new Date(),
        };
        const created = await Url.create(urlModelData);
        res.json(created);
      }
    } catch (err) {
      console.error(err);
      res.status(500).json('Server error');
    }
  } else {
    res.status(401).json('Invalid long url Poursuh');
  }
};

module.exports = { storeShortenUrl };
