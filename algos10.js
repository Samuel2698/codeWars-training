function bouncingBall(h, bounce, window) {
  let rebounds = -1
  if (bounce > 0 && bounce < 1)
    while (h > window) (rebounds += 2), (h *= bounce)
  return rebounds
}

console.log(bouncingBall(3, 0.66, 1.5))
console.log(bouncingBall(30, 0.66, 1.5))
console.log(bouncingBall(3, 1.0, 1.5))
