const vowels = 'aeiou'

console.time('disemvowel')

function disemvowel(str) {
  return str
    .split('')
    .filter((letter) => !vowels.includes(letter.toLowerCase()))
    .join('')
}

const result = disemvowel('I hate this website!')
console.log(result)

console.timeEnd('disemvowel')

console.time('disemvowel2')
const disemvowel2 = (str) => {
  const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
  let newStr = ''
  for (let i = 0; i <= str.length; i++) {
    let char = str.charAt(i)
    if (vowels.indexOf(char) == -1) {
      newStr += char
    }
  }
  return newStr
}

const result2 = disemvowel2('I hate this website!')
console.log(result2)

console.timeEnd('disemvowel2')

console.time('disemvowel3')
function disemvowel3(str) {
  return str.replace(/[aeiouAEIOU]/g, '')
}

let resultat3 = disemvowel3('This website is for losers LOL!')
console.log(resultat3)

console.timeEnd('disemvowel3')

const vocales = 'aeiouáéíóúäëïöüàèìòùâêîôû'
function disemvowel4(str) {
  return str
    .split('')
    .filter((letter) => !vocales.includes(letter.toLowerCase()))
    .join('')
}

console.log(disemvowel4('Qué web tan basura!'))

function disemvowel5(str) {
  return str
    .replace(/[aeiouáéíóúäëïöüàèìòùâêîôûAEIOUÁÉÍÓÚÄËÏÖÜÀÈÌÒÙÂÊÎÔÛ]/g, '')
    .toLowerCase()
}

console.log(disemvowel5('Esta web, pero qué mala es!'))

//* Final Version ✅
function disemvowel6(str) {
  return str.replace(/[aeiouáéíóúäëïöüàèìòùâêîôû]/gi, '')
}

console.log(disemvowel6('Esta web, pero qué mala es!'))
