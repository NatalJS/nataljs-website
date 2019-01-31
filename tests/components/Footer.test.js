
import renderer from 'react-test-renderer';
import Footer from 'components/Footer';

describe('Component Footer', () => {
  let Component;

  beforeAll(() => {
    Component = setup(Footer);
  })

  it('should render component correctly', () => {
    const wrapper = renderer.create(Component());

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
