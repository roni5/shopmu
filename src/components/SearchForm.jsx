import React, { Component } from "react";

class SearchForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
      this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    const search = this.state.value;
    event.preventDefault();
    window.location = `http://localhost:3000/#${search}`;
    console.log(search);
  }

  render() {
    return (
      <form  onSubmit={this.handleSubmit}>
        <label htmlFor="searchForm">
          Page Search:
          <input className="form-control form-control-sm " type="text" id="searchForm" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input className="btn btn-secondary btn-sm " type="submit" value="Submit" />
      </form>
    );
  }
}
export default SearchForm;