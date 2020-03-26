const DevRepository = require('../repositories/DevRepository');
const StringParser = require('../utils/StringParser');

module.exports = {
  async findNearDevs(queryParams) {
    queryParams.techs = StringParser.parseStringAsArray(queryParams.techs);

    return await DevRepository.findNearDevs(queryParams);
  }
}