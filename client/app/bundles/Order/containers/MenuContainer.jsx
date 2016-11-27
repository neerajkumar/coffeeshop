import React, { PropTypes } from 'react';
import Menu from '../components/Menu';

// Simple example of a React "smart" component
export default class MenuContainer extends React.Component {
  static propTypes = {
    items: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { items: this.props.items };
  }

  // updateName = (name) => { this.setState({ name }); };

  render() {
    return (
      <Menu items={this.state.items} />
    );
  }
}
