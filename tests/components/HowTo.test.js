
import renderer from 'react-test-renderer';
import HowTo from 'components/HowTo';

describe('Component HowTo', () => {
  let Component;

  beforeAll(() => {
    Component = setup(HowTo);
  })

  it('should render component correctly', () => {
    const wrapper = renderer.create(Component());

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
