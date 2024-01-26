function maxDistance(movements) {
    const steps = [...movements];
    const movementValues = {
      '<': -1,
      '>': 1,
    };
    let a = 0;
    let b = 0;

    for (const step of steps) {
      if (step !== '*') {
        a += movementValues[step];
      } else {
        b++;
      }
    }
  
    return Math.abs(a) + b;
}  