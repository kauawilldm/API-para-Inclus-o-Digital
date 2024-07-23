const { tips } = require('../models/digitalLiteracyModel');

const getDigitalLiteracyTips = (req, res) => {
  res.json(tips);
};

module.exports = { getDigitalLiteracyTips };
