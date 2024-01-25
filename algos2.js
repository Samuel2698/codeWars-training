function openOrSenior(data) {
  return data.map(([age, handicap]) => {
    return age >= 55 && handicap > 7 ? 'Senior' : 'Open'
  })
}

const result = [
  [18, 20],
  [45, 2],
  [61, 12],
  [37, 6],
  [21, 21],
  [78, 9]
]

console.log(openOrSenior(result))

const persistence = (num) => {
  return `${num}`.length > 1
    ? 1 + persistence(`${num}`.split('').reduce((a, b) => a * +b))
    : 0
}

console.log(persistence(39))
console.log(persistence(999))
console.log(persistence(4))
