const DevRepository = require('../repositories/DevRepository');

module.exports = {
  async findAll() {
    return await DevRepository.findAll();
  }
};