import React, { PropTypes } from 'react';
import Dropdown from 'react-bootstrap/lib/Dropdown';
import MenuItem from 'react-bootstrap/lib/MenuItem';
import DropdownMenu from 'react-bootstrap/lib/DropdownMenu';

const Menu = ({ onSelected, items }) => (
  <div class="col-xs-4">
    <div class="dropdown" id="type-ddl">
      <Dropdown id="dropdown-custom-1">
        <Dropdown.Toggle>
          <i className="fa fa-coffee fa-fw"></i>
          Make an Order
        </Dropdown.Toggle>        
        <Dropdown.Menu bsStyle="default" title="Make an Order" id="type-ddl-btn" onSelect={ onSelected }>
          {items.map((item) => <MenuItem data-id={item.id} eventKey={item.id} class="menu-item">{item.drink_name} - {item.cup_size}</MenuItem> )}
        </Dropdown.Menu>      
      </Dropdown>
    </div>
  </div>
);

Menu.propTypes = {
  // If you have lots of data or action properties, you should consider grouping them by
  // passing two properties: "data" and "actions".
  items: PropTypes.func.isRequired,
};


export default Menu;