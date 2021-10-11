const keywordsDb = require('../schemas/keywordsSchema');
const detailsDb = require('../schemas/detailsSchema');
const keywordsArr = [];
const detailsArr = [];

module.exports = {
  saveKeyword: async (req, res) => {
    const { keyword } = req.body;
    keywordsArr.push(keyword);
    const keywords = new keywordsDb();
    keywords.keyword = keyword;
    await keywords.save();
    console.log('User searched keywords: ' + keywordsArr);
    res.send({ error: false, message: 'keyword written to DB' });
  },
  saveDetails: async (req, res) => {
    const { detail } = req.body;
    detailsArr.push(detail);
    const details = new detailsDb();
    details.detail = detail;
    await details.save();
    console.log('User clicked details: ' + detailsArr);
    res.send({ error: false, message: 'Clicked detail written to DB' });
  },
};
