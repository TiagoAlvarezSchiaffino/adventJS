function maxGifts(houses) {
    let prevMax = 0;
    let currentMax = 0;
  
    for (const house of houses) {
      const newMax = Math.max(currentMax, prevMax + house);
      prevMax = currentMax;
      currentMax = newMax;
    }
  
    return currentMax;
}