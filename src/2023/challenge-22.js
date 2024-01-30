function compile(code) {
    let counter = 0;
    let stack = -1;
  
    const basicInstructions = {
      '+': +1,
      '-': -1,
      '*': +0,
    };
  
    for (let i = 0; i < code.length; i++) {
      const instruction = code[i];
  
      if (instruction in basicInstructions) {
        counter += basicInstructions[instruction] || counter;
      }
  
      if (instruction === '<' && stack !== -1) {
        i = stack;
        stack = -1;
      }
  
      if (instruction === '¿' && counter <= 0) {
        i = code.indexOf('?', i);
      }
  
      if (instruction === '%') {
        stack = i;
      }
    }
  
    return counter;
}