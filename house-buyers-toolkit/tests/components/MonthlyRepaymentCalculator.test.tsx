import renderer from 'react-test-renderer';
import { expect, it } from '@jest/globals'
import MonthlyRepaymentCalculator from '../../src/components/MonthlyRepaymentCalculator'

it('Check Monthly Repayment Calculator component enders correctly', () => {
    const tree = renderer
        .create(<MonthlyRepaymentCalculator />)
            .toJSON();
    expect(tree).toMatchSnapshot();
});