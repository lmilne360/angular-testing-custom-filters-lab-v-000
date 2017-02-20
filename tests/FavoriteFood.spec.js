describe('Favorite Food Filter', function () {
	var $controller;

	beforeEach(module('app'));

	beforeEach(inject(function ($injector) {
		$filter = $injector.get('$filter');
	}));

	it('should give favorite', function () {
		var mockedList = [{
			name: 'Tester',
			favoriteFood: 'Coffee'
		}, {
			name: 'Testerr',
			favoriteFood: 'Monster'
		}, {
			name: 'Testerrr',
			favoriteFood: 'Beer'
		}];

		var results = $filter('favoriteFood')(mockedList, 'Coffee');

		expect(results.length).toBe(1);
		expect(results[0].name).toBe('Tester');
	});
});
