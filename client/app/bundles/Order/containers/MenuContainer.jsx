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
    this.state = { items: this.props.items || [] };
    this.onSelected = this.onSelected.bind(this);
  }

  onSelected(e) {
    console.log(e);
    $.ajax({
      url: "/orders",
      method: "POST",
      dataType: 'json',
      data: {id: e},
      cache: false,
      success: function() {
        console.log("success")
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
        <Menu onSelected={this.onSelected} items={this.state.items} />
      </div>
    );
  }
}
