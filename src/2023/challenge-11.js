function getIndexsForPalindrome(word) {
    const isPalindrome = (str) => str === str.split('').reverse().join('');

    if (isPalindrome(word)) {
        return [];
    }

    for (let start = 0; start < word.length; start++) {
        for (let end = start + 1; end < word.length; end++) {
            const swapped = [...word];
            [swapped[start], swapped[end]] = [swapped[end], swapped[start]];

            if (isPalindrome(swapped.join(''))) {
                return [start, end];
            }
        }
    }

    return null;
}