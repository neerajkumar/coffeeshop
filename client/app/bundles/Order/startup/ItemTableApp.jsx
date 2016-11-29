import React from 'react';
import ReactOnRails from 'react-on-rails';

import ItemTableContainer from '../containers/ItemTableContainer';

// _railsContext is the Rails context, providing contextual information for rendering
const ItemTableApp = (props, _railsContext) => (
  <ItemTableContainer {...props} />
);

// This is how react_on_rails can see the MenuItemApp in the browser.
ReactOnRails.register({ ItemTableApp });
