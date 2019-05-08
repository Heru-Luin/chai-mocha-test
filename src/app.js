class Test {
    foo() {
        return 'foo';
    }
}

/* istanbul ignore next */
if (typeof exports !== 'undefined') {
	exports.Test = Test;
}
/* istanbul ignore next */
if (typeof define !== 'undefined') {
	define(function() {
		return Chess;
	});
}
