const { subtract } = require('../test3.js');
const calculator = require('../test3.js');

describe ('A Simple claculator class for Add, Subtract, Multiply and divide methods', () => {

    describe('Tests for Add Method', () => {
        test('Add Method test 1', () => {
            expect(calculator.add(2, 3)).toBe(5);
        })
        test('Add Method test 2', () => {
            expect(calculator.add(5, 4)).toBe(9);
        })
        test('Add Method test 3', () => {
            expect(calculator.add(10,10)).toBe(20);
        })
    });
    describe("Subtract method for tests", () => {
        test("Subtract Method Test 1", () => {
            expect(calculator.subtract(9,10)).toBe(-1);
        })
        test("Subtract Method for test 2", () => {
            expect(calculator.subtract(10,7)).toBe(3);
        })
        test("Subtract Method for test 3", () => {
            expect(calculator.subtract(3,1)).toBe(2);
        })
    })
    describe("Multiply Method for test", () => {
        test("Multiply method test 1", () => {
            expect(calculator.multiply(3,2)).toBe(6);
        })
        test("Multiply method test 2", () => {
            expect(calculator.multiply(9,2)).toBe(18);
        })
        test("Multiply method test 3", () => {
            expect(calculator.multiply(10,5)).toBe(50);
        })
    });
    describe("Divide Method for test", () => {
        test("Divide method test 1", () => {
            expect(calculator.divide(3,3)).toBe(1);
        })
        test("Divide method test 2", () => {
            expect(calculator.divide(10,2)).toBe(5);
        })
        test("Divide method test 3", () => {
            expect(calculator.divide(10,5)).toBe(2);
        })
    })
});
