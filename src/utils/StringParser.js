module.exports = {
  parseLowerCaseStringAsArray(stringToBeParsed) {
    return stringToBeParsed.split(',').map(string => string.trim().toLowerCase());
  }
}