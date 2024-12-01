import { StringCalculator } from '../utils/utils';

test('Empty string should always return an 0', () => {
    const result = StringCalculator.add("")
    expect(result).toBe(0)
});

test('If string has length 1 return the string value', () => {
    const result = StringCalculator.add("1")
    expect(result).toBe(1)
});

test('handle two digit addition', () => {
    const result = StringCalculator.add("1,5")
    expect(result).toBe(6)
});

test('Allow add methods to handle any amount of numbers', () => {
    const result = StringCalculator.add("1,5,8,9,65,20")
    expect(result).toBe(108)
});

test('Allow the add method to handle new lines between numbers', () => {
    const result = StringCalculator.add("1\n2,3")
    expect(result).toBe(6)
});

test('Support different delimiters', () => {
    const result = StringCalculator.add("//;\n1;2")
    expect(result).toBe(3)
});

test('Calling add with a negative number will throw an exception', () => {
    expect(() => StringCalculator.add("//;\n1;2,-1,4,-5")).toThrow("Error: Negative numbers are not allowed -1,-5");
});