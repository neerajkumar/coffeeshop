import React, { PropTypes } from 'react';
import Menu from '../components/Menu';
import GroupByType from '../components/GroupByType';
import GroupByCup from '../components/GroupByCup';
import OrderListing from '../components/OrderListing';
import Panel from 'react-bootstrap/lib/Panel';
import Grid from 'react-bootstrap/lib/Grid';
import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';


// Simple example of a React "smart" component
export default class MenuContainer extends React.Component {
  static propTypes = {
    items: PropTypes.string.isRequired, // this is passed from the Rails view
    orders: PropTypes.string.isRequired, // this is passed from the Rails view
    total_sales: PropTypes.string.isRequired, // this is passed from the Rails view
  };

  constructor(props) {
    super(props);

    // How to set initial state in ES6 class syntax
    // https://facebook.github.io/react/docs/reusable-components.html#es6-classes
    this.state = { items: this.props.items || [], orders: this.props.orders || [], total_sales: this.props.total_sales || 0.0 };
    this.onTypeSelected = this.onTypeSelected.bind(this);
    this.onCupSelected = this.onCupSelected.bind(this);
    this.onSelected = this.onSelected.bind(this);
  }

  onSelected(e) {
    console.log(e);
    $.ajax({
      url: "/orders",
      method: "POST",
      dataType: 'json',
      data: {id: e.id},
      cache: false,
      success: function() {
        console.log("success");
        coffeeshop.showNotice("A New Order Placed.", 4000);
        this.setState ({
          total_sales: '$' + (Number(this.props.total_sales.replace(/[^0-9\.]+/g,"")) + e.price)
        });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log("error");
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  onTypeSelected(e) {
    console.log(e);
    $.ajax({
      url: "/orders.json",
      method: "GET",
      dataType: 'json',
      data: {type: e},
      cache: false,
      success: function(data) {
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

  onCupSelected(e) {
    console.log(e);
    $.ajax({
      url: "/orders.json",
      method: "GET",
      dataType: 'json',
      data: {size: e},
      cache: false,
      success: function(data) {
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
      <div class="panel panel-primary">
        <Menu onSelected={this.onSelected} items={this.state.items} />
        <Panel header="Order Listing" bsStyle="primary">
          <div class="panel-heading" id="panel-heading">
            <i class="fa fa-list-alt" id="fa-list-alt"></i>
            <span class="loading-icon" id="loading-icon">
            </span>
            <i class="fa fa-refresh pull-right" id="refresh-list"></i>
          </div>

          <div class="panel-body">
            <Grid>
              <Row className="show-grid">
                <Col xs={6} md={4}><h4>Total Sales: {this.state.total_sales} </h4></Col>
                <Col xs={6} md={4}><GroupByType onTypeSelected={this.onTypeSelected} /></Col>
                <Col xs={6} md={3}><GroupByCup onCupSelected={this.onCupSelected} /></Col>
              </Row>

              <Row className="show-grid">
                <Col xs={18} md={11}><OrderListing orders={this.state.orders} /></Col>
              </Row>
            </Grid>
          </div>
        </Panel>
      </div>
    );
  }
}
