function organizeGifts(gifts) {
    let result = '';

    for (const giftInfo of gifts.match(/\d+\w/g) || []) {
        const symbol = giftInfo.slice(-1);
        const size = +giftInfo.slice(0, -1);

        const repetitions = Math.floor(size / 50);
        const remainingBoxes = Math.floor((size % 50) / 10);
        const remainingGifts = size % 10;

        result += `[${symbol}]`.repeat(repetitions);
        result += `{${symbol}}`.repeat(remainingBoxes);

        if (remainingGifts > 0) {
            result += `(${symbol.repeat(remainingGifts)})`;
        }
    }

    return result;
}