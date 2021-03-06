import React, { PropTypes } from 'react';
import Dropdown from 'react-bootstrap/lib/Dropdown';
import DropdownMenu from 'react-bootstrap/lib/DropdownMenu';
import MenuItem from 'react-bootstrap/lib/MenuItem';

const GroupByType = ({ onTypeSelected }) => (
  <div class="col-xs-4">
    <div class="dropdown" id="type-ddl">
      <Dropdown id="dropdown-custom-1">
        <Dropdown.Toggle>
          <i className="fa fa-database fa-fw"></i>
          Group By Type
        </Dropdown.Toggle>        
        <Dropdown.Menu bsStyle={"default".toLowerCase()} title="Group by Type" id="type-ddl-btn" onSelect={ onTypeSelected }>
          {['All', 'Coffee', 'Tea'].map((group_type) => <MenuItem data-id={group_type} eventKey={group_type} class="group-by-type">{group_type}</MenuItem> )}
        </Dropdown.Menu>      
      </Dropdown>
    </div>
  </div>
);

GroupByType.propTypes = {};

export default GroupByType;