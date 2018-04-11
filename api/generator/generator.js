var names = require('./names');
var genres = require('./genres');
var countries = require('./countries');
module.exports = {
  generateName,
  generateStyle,
  generateCountry
}

function capFirst(string) {
  console.log(string);
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function getRandomInt(min, max) { //génère un nombre entre min (inclu) et max (exclu)
  	return Math.floor(Math.random() * (max - min)) + min;
}

function generateName(bool){ //le booléen permet d'avoir, ou non, le tiret (-)
  var name = '';
  var separator = bool ? '-' : ' ';
  switch (getRandomInt(0, 4)) {
    case 0:
      name = capFirst(names.name1[getRandomInt(0, names.name1.length)]) + separator + capFirst(names.name2[getRandomInt(0, names.name2.length)]);
      break;
    case 1:
      name = capFirst(names.name2[getRandomInt(0, names.name2.length)]) + separator + capFirst(names.name1[getRandomInt(0, names.name1.length)]);
      break;
    case 2:
      name = capFirst(names.name1[getRandomInt(0, names.name1.length)]);
      break;
    case 3:
      name = capFirst(names.name2[getRandomInt(0, names.name2.length)]);
      break;
    default:
      name = capFirst(names.name1[getRandomInt(0, names.name1.length)]);
      break;
  }
	return name;
}

function generateStyle(){
  return genres[getRandomInt(0, genres.length)];
}

function generateCountry(){
  return countries[getRandomInt(0, countries.length)];
}
