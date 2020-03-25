const Dev = require('../models/Dev');

module.exports = {
  async findAll() {
    return Dev.find();    
  },

  async findOneByGithubUsername(githubHusername) {
    return Dev.findOne({
      github_username: {
        $eq: githubHusername
      }
    });
  },

  async store({ github_username, name, bio, avatar_url, location, techs }) {
    return await Dev.create({
      github_username,
      name,
      avatar_url,
      bio,
      techs,
      location
    });
  }
};