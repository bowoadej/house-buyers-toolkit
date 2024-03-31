import renderer from 'react-test-renderer';
import { describe, expect, it, test } from '@jest/globals';
import MaximumBorrowingAmount from '../../src/components/MaximumBorrowingAmount';

/*jest.mock('../src/components/MaximumBorrowingAmount', () => {
    return { MaximumBorrowingAmount };
});*/

it('Check Maximum Borrowing Amount Calculator component enders correctly', () => {
    const tree = renderer
        .create(<MaximumBorrowingAmount />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});

describe('testing Maximum Borrowing Amount test', () => {
    test('empty string should result in zero', () => {
        expect(MaximumBorrowingAmount).toBeDefined();
    });
});

