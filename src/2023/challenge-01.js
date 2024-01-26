function findFirstRepeated(gifts) {
    return gifts.find((e, i, arr) => {
      return arr.indexOf(e) !== i;
    }) || -1;
}