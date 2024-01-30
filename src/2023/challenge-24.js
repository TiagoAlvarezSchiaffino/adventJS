function getStaircasePaths(steps, maxJump) {
    const paths = [];
    paths[0] = [[]];
  
    for (let currentStep = 1; currentStep <= steps; currentStep++) {
      paths[currentStep] = [];
  
      for (let jump = 1; jump <= Math.min(currentStep, maxJump); jump++) {
        for (const path of paths[currentStep - jump]) {
          const newPath = [jump];
          newPath.push(...path);
          paths[currentStep].push(newPath);
        }
      }
    }
  
    return paths[steps];
}