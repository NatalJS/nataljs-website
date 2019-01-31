
import renderer from 'react-test-renderer';
import Events from 'components/Events';

describe('Component Events', () => {
  let Component;

  beforeAll(() => {
    Component = setup(Events);
  });

  it('should render component correctly', () => {
    const wrapper = renderer.create(Component());

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
