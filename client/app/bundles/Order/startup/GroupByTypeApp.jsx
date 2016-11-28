import React from 'react';
import ReactOnRails from 'react-on-rails';

import GroupByTypeContainer from '../containers/GroupByTypeContainer';

// _railsContext is the Rails context, providing contextual information for rendering
const GroupByTypeApp = (props, _railsContext) => (
  <GroupByTypeContainer {...props} />
);

// This is how react_on_rails can see the GroupByTypeApp in the browser.
ReactOnRails.register({ GroupByTypeApp });
