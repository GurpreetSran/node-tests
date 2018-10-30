const utils = require('./utils');
const expect = require('expect');

it('should add two numbers', () => {
    var result = utils.add(2, 7);
    expect(result).toBeA('number').toEqual(9);
});