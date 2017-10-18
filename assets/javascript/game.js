
// random number generator for game function
function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

var newrandom;

getRandomInt(19, 120);
newrandom = getRandomInt(19, 120);
console.log(newrandom);