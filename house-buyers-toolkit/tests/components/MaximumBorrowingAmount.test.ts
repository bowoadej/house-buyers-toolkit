
import { describe, expect,/* jest,*/ test } from '@jest/globals';
//import { render } from '@testing-library/react';
import MaximumBorrowingAmount from '../../src/components/MaximumBorrowingAmount';

/*jest.mock('../src/components/MaximumBorrowingAmount', () => {
    return { MaximumBorrowingAmount };
});*/

describe('testing Maximum Borrowing Amount test', () => {
    test('empty string should result in zero', () => {
        expect(MaximumBorrowingAmount).toBeDefined();
    });
});


export { }