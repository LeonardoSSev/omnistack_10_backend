const DevRepository = require('../repositories/DevRepository');
const GithubService = require('./GithubService');

async function performDevStoring({ github_username, latitude, longitude, techs }) {
  const { name = login, bio, avatar_url } = await GithubService.findUser(github_username);

  const location = {
    type: 'Point',
    coordinates: [longitude, latitude]
  };

  return await DevRepository.store({ github_username, name, bio, avatar_url, location, techs });
};

module.exports = {
  async findAll() {
    return await DevRepository.findAll();
  },

  async store({ github_username, latitude, longitude, techs }) {
    let dev = await DevRepository.findOneByGithubUsername(github_username);

    if (!dev) {
      dev = await performDevStoring({ github_username, latitude, longitude, techs });
    }

    return dev;
  }
};