import React from 'react';
import renderer from 'react-test-renderer';
import Subtitle from './Subtitle';

it('renders correctly', () => {
  const tree = renderer.create(<Subtitle>Subtitle content</Subtitle>).toJSON();
  expect(tree).toMatchSnapshot();
});
