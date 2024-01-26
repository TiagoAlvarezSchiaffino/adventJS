function drawGift(size, symbol) {
    if (size < 2) {
        return '#'.repeat(size) + '\n';
    }

    const spaceCount = size - 2;
    let symbolCount = 0;

    const lines = [
        ' '.repeat(size - 1) + '#'.repeat(size)
    ];

    while (symbolCount < spaceCount) {
        lines.push(
            ' '.repeat(spaceCount - symbolCount)
                + '#' + symbol.repeat(spaceCount)
                + '#' + symbol.repeat(symbolCount++)
                + '#'
        );
    }

    lines.push(
        '#'.repeat(size)
            + symbol.repeat(spaceCount)
            + '#'
    );

    for (const str of lines.slice(0, -1).reverse()) {
        lines.push(str.replace(/\s+/, ''));
    }

    return lines.join('\n') + '\n';
}