const reverseString = require('../test2.js');

test ('expected reverse string to saqib', () => {
    const str ="biqas";
    const reverseStr = reverseString(str);
    expect(reverseStr).toBe('saqib')
});