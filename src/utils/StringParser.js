module.exports = {
  parseStringAsArray(stringToBeParsed) {
    return stringToBeParsed.split(',').map(string => string.trim());
  }
}