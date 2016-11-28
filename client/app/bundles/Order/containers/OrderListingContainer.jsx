import React, { PropTypes } from 'react';
import OrderListing from '../components/OrderListing';

// Simple example of a React "smart" component
export default class OrderListingContainer extends React.Component {
  static propTypes = {
    orders: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { orders: this.props.orders };
  }

  // updateName = (name) => { this.setState({ name }); };

  render() {
    return (
      <OrderListing orders={this.state.orders} />
    );
  }
}
