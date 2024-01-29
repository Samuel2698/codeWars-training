function order(words) {
  if (!words) return

  const wordsArray = words.split(' ')

  const sortedWords = wordsArray.sort((a, b) => {
    const numA = parseInt(a.match(/\d/)[0])
    const numB = parseInt(b.match(/\d/)[0])

    return numA - numB
  })

  return sortedWords.join(' ')
}

console.log(order('is2 Thi1s T4est 3a'))
console.log(order('4of Fo1r pe6ople g3ood th5e the2'))
