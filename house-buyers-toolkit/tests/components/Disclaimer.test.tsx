import renderer from 'react-test-renderer';
import { expect, it } from '@jest/globals'
import Disclaimer from '../../src/components/Disclaimer'

it('renders correctly', () => {
    const tree = renderer
        .create(<Disclaimer />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});