const Dev = require('../models/Dev');

module.exports = {
  async findAll() {
    return Dev.find();    
  }
};