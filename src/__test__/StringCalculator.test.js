import { StringCalculator } from '../utils/utils';

test('Empty string should always return an 0', () => {
    const result = StringCalculator.add("")
    expect(result).toBe("0")
});
