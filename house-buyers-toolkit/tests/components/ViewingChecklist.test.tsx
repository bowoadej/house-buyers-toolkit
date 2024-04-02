import renderer from 'react-test-renderer';
import { expect, it } from '@jest/globals';
import ViewingChecklist from '../../src/components/ViewingChecklist';

it('Check Monthly Repayment Calculator component enders correctly', () => {
    const tree = renderer
        .create(<ViewingChecklist />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});