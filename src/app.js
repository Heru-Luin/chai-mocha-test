class Test {
    foo() {
        return 'foo';
    }
}

if (typeof exports !== 'undefined') {
	exports.Test = Test;
}
if (typeof define !== 'undefined') {
	define(function() {
		return Test;
	});
}
