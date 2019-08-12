/**
 * @format
 */

import 'react-native';
import React from 'react';
import PremiumScreen from '../src/components/';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  renderer.create(<PremiumScreen />);
});
