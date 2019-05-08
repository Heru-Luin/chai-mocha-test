
const assert = require('chai').assert;
const Test = require('../src/app').Test;

console.log(Test);

describe('A basic test', function () {
	it('should return foo', function() {
		let test = new Test();
		assert.equal(test.foo(), 'foo');
	});
});