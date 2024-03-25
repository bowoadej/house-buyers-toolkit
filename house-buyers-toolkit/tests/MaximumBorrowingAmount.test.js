//import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import MaximumBorrowingAmount from '../src/components/MaximumBorrowingAmount';

test('renders page title', () => {
    render(<MaximumBorrowingAmount />);

    const counter = screen.getByTestId("accordionTitle");

    fireEvent.click(counter);

    expect(counter).toHaveTextContent("Maximum Borrowing Amount");
});