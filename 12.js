function bouncingBall(h, bounce, window) {
  if (h > 0 && bounce > 0 && bounce < 1 && window < h) {
    let seenCount = 1; // The ball is dropped initially, so we start with 1
    let bounceHeight = h * bounce;

    while (bounceHeight > window) {
      seenCount += 2; // Counting both the upward and downward passes
      bounceHeight *= bounce;
    }

    return seenCount;
  } else {
    return -1;
  }
}

// Examples
console.log(bouncingBall(3, 0.66, 1.5)); // Output: 3
console.log(bouncingBall(3, 1, 1.5)); // Output: -1
