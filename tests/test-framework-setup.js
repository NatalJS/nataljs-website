const React = require('react');
const Enzyme = require('enzyme');
const EnzymeAdapter = require('enzyme-adapter-react-16');

Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = (Component, defaultProps = {}) => (props = {}) => (
  <Component {...defaultProps} {...props} />
);

global.setup = setup;
