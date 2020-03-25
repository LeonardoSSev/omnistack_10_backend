const DevService = require('../services/DevService');

module.exports = {
  async index(req, res) {
    const devs = await DevService.findAll();

    return res.json(devs);
  }
};