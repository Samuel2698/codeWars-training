function isSquare(n) {
  if (n < 0) return false

  const sqrt = Math.sqrt(n)

  return Number.isInteger(sqrt)
}

console.log(isSquare(4))
console.log(isSquare(25))
console.log(isSquare(8))
console.log(isSquare(-1))

const isSquare2 = (n) => Math.sqrt(n) % 1 === 0

console.log(isSquare2(4))
console.log(isSquare2(25))
console.log(isSquare2(8))
console.log(isSquare2(-1))
