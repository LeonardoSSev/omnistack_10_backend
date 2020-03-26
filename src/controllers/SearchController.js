const SearchService = require('../services/SearchService');

module.exports = {
  async index(req, res) {
    const devs = await SearchService.findNearDevs(req.query)
    
    res.json(devs);
  }
}