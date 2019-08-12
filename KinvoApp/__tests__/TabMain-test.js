/**
 * @format
 */

import 'react-native';
import React from 'react';
import TabMain from '../src/components/TabBar/TabMain';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<TabMain />);
});
