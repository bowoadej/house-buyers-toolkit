
import { describe, expect, jest, test } from '@jest/globals';
import { render } from '@testing-library/react';
import MaximumBorrowingAmount from '../src/components/MaximumBorrowingAmount';
import { toBeInDocument } from '@testing-library/jest-dom';

jest.mock('../src/components/MaximumBorrowingAmount', () => {
    return { MaximumBorrowingAmount };
});

test("If TopLevelComponent is passed the open prop Modal is rendered", () => {
    const { queryByTestId } = render(<MaximumBorrowingAmount/>);
    expect(queryByTestId("maximum-amount-container")).toBeInDocument("Maximum");
});


export { }