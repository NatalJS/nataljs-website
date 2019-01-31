import renderer from 'react-test-renderer';
import About from 'components/About';

describe('Component About', () => {
  let Component;

  beforeAll(() => {
    Component = setup(About);
  })

  it('should render component correctly', () => {
    const wrapper = renderer.create(Component());

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
