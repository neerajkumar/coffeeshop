import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Table from 'react-bootstrap/lib/Table';

const OrderListing = ({ orders }) => orders.length > 0 ? ( 
  <Table responsive striped condensed>
    <thead>
      <tr>
        <th>Name</th>
        <th>Drink Type</th>
        <th>Cup Size</th>
        <th>Price</th>
        <th>Order Time</th>
      </tr>
    </thead>
    <tbody>
      {orders.map((order) => 
        <tr>
          <td>{order.name}</td>
          <td>{order.drink_type}</td>
          <td>{order.cup_size}</td>
          <td>{order.price}</td>
          <td>{order.order_time}</td>
        </tr>
      )}
    </tbody>
  </Table>
  ) : <div></div>

OrderListing.propTypes = {
  // If you have lots of data or action properties, you should consider grouping them by
  // passing two properties: "data" and "actions".
  orders: PropTypes.func.isRequired,
};


export default OrderListing;