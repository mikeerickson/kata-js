describe("fizzbuzz", function() {

	it('should handle zero as number', function() {
		expect(fizzbuzz.execute(0)).toEqual('0');
	});

	it("should return fizz when number divisible by 3", function() {
		expect(fizzbuzz.execute(3)).toEqual('fizz');
	});

	it("should throw error here!", function() {
		expect(3).toEqual(3);
	});

	it("should return buzz when number divisible by 5", function() {
		expect(fizzbuzz.execute(5)).toEqual('buzz');
		expect(fizzbuzz.execute(20)).toEqual('buzz');
	});

	it("should return fizzbuzz when number divisible by 3 and 5", function() {
		expect(fizzbuzz.execute(15)).toEqual('fizzbuzz');
		expect(fizzbuzz.execute(30)).toEqual('fizzbuzz');
	});

	it("should return buzz when number divisible by 5", function() {
		expect(fizzbuzz.execute(20)).toEqual('buzz');
	});

	it("should return value when number is not divisible by 3 or 5", function() {
		expect(fizzbuzz.execute(1)).toEqual('1');
		expect(fizzbuzz.execute(2)).toEqual('2');
		expect(fizzbuzz.execute(22)).toEqual('22');
	});

	it("should test a series of values", function() {
		expect(fizzbuzz.executeUpTo(3)).toBeArray();
		expect(fizzbuzz.executeUpTo(3)).toEqual(['1', '2', 'fizz']);
	});

	it("should have value of 'fizz' at offset 3", function() {
		expect(fizzbuzz.executeUpTo(3)[2]).toEqual('fizz');
		expect(fizzbuzz.executeUpTo(15)[14]).toEqual('fizzbuzz');
	});

	it("should test a large series of values", function() {
		expect(fizzbuzz.executeUpTo(100)).toBeArray();
		expect(fizzbuzz.executeUpTo(100)).toBeArrayOfStrings();
	});

});

xdescribe("jasmine-matchers suite", function() {
	it('should do some object checking', function() {
		myObj = {};
		expect(myObj).toBeEmptyObject();

		myObj.name = 'CodeDungeon';
		expect(myObj).toHaveMember('name');

	});

	it('should test jasmine-matchers library', function() {
		expect(3).toBeNumber();
	});

});