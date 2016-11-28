import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import GroupByType from '../components/GroupByType';
import OrderListing from '../components/OrderListing';
import OrderListingContainer from '../containers/OrderListingContainer';

// Simple example of a React "smart" component
export default class GroupByTypeContainer extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { orders: [], order_container: null };
    this.onSelected = this.onSelected.bind(this);
    this.order_listing = document.getElementById("order-listing")
  }

  onSelected(e) {
    console.log(e);
    $.ajax({
      url: "/orders.json",
      method: "GET",
      dataType: 'json',
      data: {type: e},
      cache: false,
      success: function(data) {
        $("#order-listing").html("")
        this.setState({
          orders: data
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log("error");
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  render() {
    return (
      <div>
        <GroupByType onSelected={this.onSelected} orders={this.state.orders}/>,
        <OrderListing orders={this.state.orders} />
      </div>
    );
  }
}
