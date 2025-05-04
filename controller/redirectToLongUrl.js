const Url = require('../models/Url');

const redirectToLongUrl = async (req, res) => {
  try {
    const { shortUrlCode } = req.params;
    console.log('Redirecting shortUrlCode:', shortUrlCode);

    const url = await Url.findOne({ shortUrlCode });

    if (url) {
      console.log('Found URL, redirecting to:', url.longUrl);
      return res.redirect(url.longUrl);
    } else {
      console.log('No URL found for code:', shortUrlCode);
      return res.status(404).json('No URL found for this code');
    }
  } catch (err) {
    console.error('Redirect error:', err);
    return res.status(500).json('Server error during redirect');
  }
};

module.exports = { redirectToLongUrl };
