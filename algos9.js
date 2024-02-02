function findOdd(A) {
  return A.reduce((acc, num) => acc ^ num, 0)
}

const result1 = findOdd([7])
const result2 = findOdd([0])
const result3 = findOdd([1, 1, 2])

console.log(result1, result2, result3)
