import renderer from 'react-test-renderer';
import Index from 'pages/index';

jest.mock('components/Header', () => 'Header');
jest.mock('components/About', () => 'About');
jest.mock('components/HowTo', () => 'HowTo');
jest.mock('components/Events', () => 'Events');
jest.mock('components/JoinToUs', () => 'JoinToUs');
jest.mock('components/Footer', () => 'Footer');

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
