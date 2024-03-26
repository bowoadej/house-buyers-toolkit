
import type Component from '../src/components/MaximumBorrowingAmount';
const { NumberOfBuyers } = jest.requireActual<typeof number>("../silly")


describe('renders', () => {
    test('getting number of buyers', () => {
        expect(NumberOfBuyers.toBe(0));
    });
});

export { }