const { findNumberThatSumTo2020, getInputs } = require('./app');



describe('find numbers that sum to 2020', () => {
    const testArray = [1721, 979, 366, 299, 675, 1456];
    const expectedArray = [1721, 299];

    test('should return [1721, 299]', () => {
        expect(findNumberThatSumTo2020(testArray.sort())).toEqual(expectedArray.sort());
    })

    // test('should return 514579', () => {
    //     expect(getInputs()).toBe(514579)
    // })
})