const Url = require('../models/Url');

const redirect =  async (req, res) => {
  const {shortUrlCode} = req.params
  try {
    const url = await Url.findOne({ shortUrlCode});
    if (url) {
      return res.redirect(url.longUrl);
    } else {
      return res.status(404).json('No url found');
    }
  } catch (err) {
    console.error(err);
    res.status(500).json('Server error');
  }
};

module.exports = {redirect};
