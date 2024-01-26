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
