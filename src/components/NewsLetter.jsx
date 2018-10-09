import React, { Component } from "react";

export class Newsletter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            newsletter: this.props.newsletter,
        }
    }

    handleClick(event) {
      let newsletterId = event.currentTarget.value;
      var x = event.currentTarget.tagName;
        console.log(newsletterId + x);
    }

    render() {
        return (
            <div className="col-sm-4 col-xs-12">
                 <button  className="btn btn-primary btn-sm" onClick={this.handleClick.bind(this)}
                                value={this.state.newsletterId}>
                         <span className="fa fa-arrow-right">NewsLetter</span>
                 </button>
            </div>
        )
    }
}

export default Newsletter;

