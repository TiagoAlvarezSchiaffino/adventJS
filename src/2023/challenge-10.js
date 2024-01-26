function createChristmasTree(ornaments, height) {
    let tree = '';
    let index = 0;

    for (let row = 0; row < height; row++) {
        let rowOrnaments = '';
        
        for (let col = 0; col <= row; col++) {
            rowOrnaments += ornaments[index++ % ornaments.length] + ' ';
        }

        tree += `${rowOrnaments.trim().padStart(height + row)}\n`;
    }

    return `${tree}${'|'.padStart(height)}\n`;
}