import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import Button from 'react-bootstrap/lib/Button';
import ButtonToolbar from 'react-bootstrap/lib/ButtonToolbar';
import DropdownButton from 'react-bootstrap/lib/DropdownButton';
import MenuItem from 'react-bootstrap/lib/MenuItem';

const Menu = ({ items }) => (
  <div class="panel panel-info">
    <div class="panel-body">
      <div class="dropdown" id="order-ddl">
        <i class="fa fa-coffee"></i>
        <DropdownButton bsStyle={"default".toLowerCase()} title="Make an Order" id="order-ddl-menu">
          {items.map((item) => <MenuItem data-id={item.id} class="menu-item">{item.drink_name} - {item.cup_size}</MenuItem> )}
        </DropdownButton>
      </div>
    </div>
  </div>
);

Menu.propTypes = {
  // If you have lots of data or action properties, you should consider grouping them by
  // passing two properties: "data" and "actions".
  items: PropTypes.func.isRequired,
};


export default Menu;