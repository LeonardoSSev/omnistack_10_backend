const axios = require('axios');

const GITHUB_URL = 'https://api.github.com/users';

module.exports = {
  async findUser(username) {
    const { data } = await axios.get(`${GITHUB_URL}/${username}`);

    return data;
  }
}