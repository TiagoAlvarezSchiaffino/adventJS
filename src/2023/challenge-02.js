function manufacture(gifts, materials) {
    const materialSet = new Set(materials);
  
    return gifts.filter(function (gift) {
      return [...gift].every(function (char) {
        return materialSet.has(char);
      });
    });
}