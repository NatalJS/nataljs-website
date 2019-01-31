import renderer from 'react-test-renderer';
import Index from 'pages/index';

describe('Page Index', () => {
  let Component;

  beforeAll(() => {
    Component = setup(Index);
  });

  it('should render all page with all components correctly', () => {
    const wrapper = renderer.create(Component());

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
