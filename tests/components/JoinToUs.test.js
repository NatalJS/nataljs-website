import renderer from 'react-test-renderer';
import JoinToUs from 'components/JoinToUs';

describe('Component JoinToUs', () => {
  let Component;

  beforeAll(() => {
    Component = setup(JoinToUs);
  });

  it('should render component correctly', () => {
    const wrapper = renderer.create(Component());

    expect(wrapper.toJSON()).toMatchSnapshot();
  });
});
