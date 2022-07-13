const capitalize = require('../test4');

test('Expected the string to be capitalized is Saqib', ()=> {
    const str = 'sAqiB';
    const cptilize = capitalize(str);
    expect(cptilize).toBe('Saqib')
})