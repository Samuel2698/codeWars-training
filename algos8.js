function count(string) {
  return [...string].reduce((acc, char) => {
    acc[char] = (acc[char] || 0) + 1
    return acc
  }, {})
}

const result = count('aabac')
console.log(result)
