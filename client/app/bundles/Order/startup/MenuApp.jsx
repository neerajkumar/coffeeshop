import React from 'react';
import ReactOnRails from 'react-on-rails';

import MenuContainer from '../containers/MenuContainer';

// _railsContext is the Rails context, providing contextual information for rendering
const MenuApp = (props, _railsContext) => (
  <MenuContainer {...props} />
);

// This is how react_on_rails can see the MenuItemApp in the browser.
ReactOnRails.register({ MenuApp });

