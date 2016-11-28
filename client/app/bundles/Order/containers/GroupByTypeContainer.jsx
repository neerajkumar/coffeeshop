import React, { PropTypes } from 'react';
import GroupByType from '../components/GroupByType';

// Simple example of a React "smart" component
export default class GroupByTypeContainer extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = {};
  }

  // updateName = (name) => { this.setState({ name }); };

  render() {
    return (
      <GroupByType />
    );
  }
}
