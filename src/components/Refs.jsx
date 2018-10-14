import React, { Component } from "react";

class Refs extends React.Component {
  constructor(props) {
    super(props);
    // create a ref to store the textInput DOM element
    //vanilla  getElementbyId('input').value
    this.textInput = React.createRef();
    this.focusTextInput = this.focusTextInput.bind(this);
  }

  focusTextInput(e) {
    if (e.key === 'Enter') {
      this.textInput.current.focus();
      console.log('do validate');
    }
    // Explicitly focus the text input using the raw DOM API
    // Note: we're accessing "current" to get the DOM node
  }

  render() {
    // tell React that we want to associate the <input> ref
    // with the `textInput` that we created in the constructor
    return (
      <div>
        <input
          type="text"
          ref={this.textInput} />

        <input
          type="button"
          value="Keyboard Enter Refs "
          placeholder="loose focus"
          onKeyPress={this.focusTextInput}
        />
      </div>
    );
  }
}

export default Refs;