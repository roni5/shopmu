import React, { Component } from "react";

class Input extends React.Component {
  _handleKeyPress(e) {
    if (e.key === 'Enter') {
      console.log('do validate');
    }
  }

  render() {
    return (<input id="put" type="text" onKeyPress={this._handleKeyPress} />);
  }
}
const root = document.getElementById('put');
//ReactDOM.render(<Input />, root)
export default Input;
