import React from 'react';
import ReactOnRails from 'react-on-rails';

import OrderListingContainer from '../containers/OrderListingContainer';

// _railsContext is the Rails context, providing contextual information for rendering
const OrderListingApp = (props, _railsContext) => (
  <OrderListingContainer {...props} />
);

// This is how react_on_rails can see the MenuItemApp in the browser.
ReactOnRails.register({ OrderListingApp });
