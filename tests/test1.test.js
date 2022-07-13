const stringLength = require('../test1.js');

test ('expected length for abcdsaqib to be 5', () => {
    expect(stringLength('saqib')).toBe(5);
})

test('expected to throw the Error', () => {
    expect(() => {stringLength('saqibjavaid')}).toThrow();
})