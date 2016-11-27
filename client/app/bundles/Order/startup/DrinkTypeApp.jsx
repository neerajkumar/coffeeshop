import React from 'react';
import ReactOnRails from 'react-on-rails';

import DrinkTypeContainer from '../containers/DrinkTypeContainer';

// _railsContext is the Rails context, providing contextual information for rendering
const DrinkTypeApp = (props, _railsContext) => (
  <DrinkTypeContainer {...props} />
);

// This is how react_on_rails can see the MenuItemApp in the browser.
ReactOnRails.register({ DrinkTypeApp });
