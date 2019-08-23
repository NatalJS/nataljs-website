import renderer from 'react-test-renderer';
import Events from 'components/Events';
import data from '../../content/data.json';

describe('Component Events', () => {
  let Component;

  beforeAll(() => {
    Component = setup(Events, { events: data.events });
  });

  it('should render component correctly', () => {
    const wrapper = renderer.create(Component());

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
