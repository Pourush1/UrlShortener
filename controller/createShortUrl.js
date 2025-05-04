const validUrl = require('valid-url');
const config = require('config');
const { nanoid } = require('nanoid');
require('dotenv').config();

const Url = require('../models/Url');

const storeShortenUrl = async (req, res) => {
  const { longUrl } = req.body;
  const baseUrl = process.env.BASE_URL || config.get('baseUrl');

  if (!validUrl.isUri(baseUrl)) {
    return res.status(401).json('Invalid base url');
  }

  if (validUrl.isUri(longUrl)) {
    try {
      let longurlInDatabase = await Url.findOne({ longUrl });

      if (longurlInDatabase) {
        res.json(`Data already exists: ${longurlInDatabase}`);
      } else {
        let shortUrlCode = await nanoid(6);
        shortUrlCode = shortUrlCode.toLowerCase();
        const shortUrl = baseUrl + '/api/' + shortUrlCode;
        const urlModelData = {
          shortUrlCode,
          longUrl,
          shortUrl,
          date: new Date(),
        };
        const created = await Url.create(urlModelData);
        return res.json(created);
      }
    } catch (err) {
      console.error(err);
      return res.status(500).json('Server error');
    }
  } else {
    return res.status(401).json('Invalid long url');
  }
};

module.exports = { storeShortenUrl };
