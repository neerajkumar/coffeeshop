import React, { PropTypes } from 'react';
import DrinkType from '../components/DrinkType';

// Simple example of a React "smart" component
export default class DrinkTypeContainer extends React.Component {
  static propTypes = {
    name: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { name: this.props.name };
  }

  // updateName = (name) => { this.setState({ name }); };

  render() {
    return (
      <DrinkType name={this.state.name} />
    );
  }
}
