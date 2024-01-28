function narcissistic(value) {
  const digits = value.toString().split('')

  const numDigits = digits.length

  const sum = digits.reduce(
    (acc, digit) => acc + Math.pow(parseInt(digit), numDigits),
    0
  )

  return sum === value
}

console.log(narcissistic(153))
console.log(narcissistic(1938))
