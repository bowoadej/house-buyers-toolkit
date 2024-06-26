import renderer from 'react-test-renderer';
import { expect, it } from '@jest/globals'
import App from '../src/App'

it('renders correctly', () => {
    const tree = renderer
        .create(<App />)
        .toJSON();
    expect(tree).toMatchSnapshot();
});