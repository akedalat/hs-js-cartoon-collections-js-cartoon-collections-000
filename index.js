function dwarfRollCall(dwarves) {

var dwarveNames = `1. ${dwarves[0]} `
for (let i = 1; i < dwarves.length; i++) {
dwarveNames += `${i+1}. ${dwarves[i]} `

}
return dwarveNames
}

function summonCaptainPlanet(planeteerCalls){
var arr = []
for (var i = 0; i < planeteerCalls.length; i++) {
arr.push(`${planeteerCalls[i].toUpperCase()}!`)
}
return arr
}

function longPlaneteerCalls(words) {

  var assortedWords = false
  for (var i = 0; i < words.length; i++) {
    if (words[i].length > 4) {
      assortedWords = true
    }
  }

  return assortedWords
}

function findTheCheese (foods) {
  for (var i = 0; i < foods.length; i++) {
    if (foods[i] === 'cheddar' || foods[i] === 'gouda' || foods[i] === 'camembert') {
      return foods[i]
    }
  }
  return "no cheese!"


}
