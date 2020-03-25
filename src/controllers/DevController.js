const DevService = require('../services/DevService');

module.exports = {
  async index(req, res) {
    const devs = await DevService.findAll();

    return res.json(devs);
  },

  async store(req, res) {
    const dev = await DevService.store(req.body);

    return res.json(dev);
  }
};