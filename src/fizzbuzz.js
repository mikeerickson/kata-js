var fizzbuzz = (function() {
	'use strict';

	function execute(number) {
		if ( number > 0 ){
			if ( number % 15 === 0) return 'fizzbuzz';
			if ( number % 3 === 0) return 'fizz';
			if ( number % 5 === 0) return 'buzz';
		}

		return number.toString();
	}

	function executeUpTo(maxNumber) {
		var result2 = _.map(_.range(1, maxNumber+1), function(value){
			return execute(value);
		});
		return result2;
	}

	return {
		execute:     execute,
		executeUpTo: executeUpTo
	};

}());