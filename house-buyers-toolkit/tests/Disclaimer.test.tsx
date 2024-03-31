import { describe, it, expect, skip } from '@jest/globals';
import { screen, render } from '@testing-library/react';
import Disclaimer from '../src/components/Disclaimer';
import '@testing-library/jest-dom';

describe.skip('Disclaimer', () => {
    it('should render the disclaimer text correctly', () => {
        render(<Disclaimer />);

        // Assert expected disclaimer text is present
        expect(screen.getByText(/NOTE:This information is purely for informative purposes only/i)).toHaveTextContent(/NOTE:This information is purely for informative purposes only/i));
});