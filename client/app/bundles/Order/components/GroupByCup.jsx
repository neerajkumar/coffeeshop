import React, { PropTypes } from 'react';
import Dropdown from 'react-bootstrap/lib/Dropdown';
import DropdownMenu from 'react-bootstrap/lib/DropdownMenu';
import MenuItem from 'react-bootstrap/lib/MenuItem';

const GroupByCup = ({ onCupSelected }) => (
  <div class="col-xs-4">
    <div class="dropdown" id="type-ddl">
      <Dropdown id="dropdown-custom-1">
        <Dropdown.Toggle>
          <i className="fa fa-database fa-fw"></i>
          Group By Cup
        </Dropdown.Toggle>        
        <Dropdown.Menu bsStyle={"default".toLowerCase()} title="Group by Type" id="type-ddl-btn" onSelect={ onCupSelected }>
          {['All', 'Tall', 'Grande', 'Venti'].map((cup) => <MenuItem data-id={cup} eventKey={cup} class="group-by-type">{cup}</MenuItem> )}
        </Dropdown.Menu>      
      </Dropdown>
    </div>
  </div>
);

GroupByCup.propTypes = {};

export default GroupByCup;