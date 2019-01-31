import renderer from 'react-test-renderer';
import Header from 'components/Header';

describe('Component Header', () => {
  let Component;

  beforeAll(() => {
    Component = setup(Header);
  })

  it('should render component correctly', () => {
    const wrapper = renderer.create(Component());

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
